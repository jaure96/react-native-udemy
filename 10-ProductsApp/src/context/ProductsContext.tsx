import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { Producto, ProductsResponse } from '../interfaces/productsInterfaces';
import cafeApi from '../api/cafeApi';

type ProductsContextProps = {
    products: Producto[],
    loadProducts: () => Promise<void>,
    addProduct: (categoryId: string, productName: string) => Promise<void>,
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>,
    deleteProduct: (id: string) => Promise<void>,
    loadProductById: (id: string) => Promise<Producto>,
    updloadImage: (data: any, id: string) => Promise<void>, //TODO cambian any
}

export const ProductsContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Producto[]>([])


    useEffect(() => {
        loadProducts()
    }, [])


    const loadProducts = async () => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50')
        setProducts([...products, ...resp.data.productos])
    }

    const addProduct = async (categoryId: string, productName: string) => {

    }
    const updateProduct = async (categoryId: string, productName: string, productId: string) => {

    }
    const deleteProduct = async (id: string) => {

    }
    const loadProductById = async (id: string): Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`/productos/${id}`)
        return resp.data
    }
    //TODO cambian any
    const updloadImage = async (data: any, id: string) => {

    }

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            updloadImage,
        }}>
            {children}
        </ProductsContext.Provider>
    )

}