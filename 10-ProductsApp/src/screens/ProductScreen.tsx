import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import useCategories from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

const ProductScreen = ({ navigation, route }: Props) => {

    const { id = '', name = '' } = route.params
    const { categories, isLoading: catLoading } = useCategories()
    const { loadProductById, addProduct, updateProduct, updloadImage } = useContext(ProductsContext)
    const { _id, categoryId, nombre, image, onChange, form, setFormValue } = useForm({
        _id: id,
        categoryId: '',
        nombre: name,
        image: ''
    })
    const [tempUri, setTempUri] = useState<string>()


    useEffect(() => {
        navigation.setOptions({
            title: nombre ? nombre : 'No product name'
        })
    }, [nombre])

    useEffect(() => {
        loadProduct()
    }, [])

    const loadProduct = async () => {
        if (id.length === 0) return
        const product = await loadProductById(id)
        setFormValue({
            _id: id,
            categoryId: product.categoria._id,
            image: product.img || '',
            nombre
        })
    }

    const saveOrUpdate = async () => {
        if (id.length > 0) {
            updateProduct(categoryId, nombre, id)
        } else {
            const tempCategorieId = categoryId || categories[0]._id
            const newProduct = await addProduct(tempCategorieId, nombre)
            onChange(newProduct._id, '_id')
        }
    }

    const takePhoto = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5,
        }, (resp) => {
            if (resp.didCancel) return
            if (!resp.assets?.[0].uri) return
            setTempUri(resp.assets?.[0].uri)
            updloadImage(resp, _id)
        })
    }

    const getPhotoFromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5,
        }, (resp) => {
            if (resp.didCancel) return
            if (!resp.assets?.[0].uri) return
            setTempUri(resp.assets?.[0].uri)
            updloadImage(resp, _id)
        })
    }

    return (
        <View style={styles.container} >
            <ScrollView>
                <Text style={styles.label} >Product name:</Text>
                <TextInput
                    placeholder='Product'
                    style={styles.textInput}
                    value={nombre}
                    onChangeText={value => onChange(value, 'nombre')}
                />

                <Text style={styles.label} >Category:</Text>
                {
                    !catLoading ?
                        <Picker
                            selectedValue={categoryId}
                            onValueChange={(val) => onChange(val, 'categoryId')}>
                            {
                                categories.map(c => (
                                    <Picker.Item label={c.nombre} value={c._id} key={c._id} />
                                ))
                            }

                        </Picker>
                        : <ActivityIndicator size={20} color="black" />
                }

                <Button
                    title='Save'
                    onPress={saveOrUpdate}
                    color={'#5856D6'}
                />

                {_id.length > 0 && (
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <Button
                            title='Camera'
                            onPress={takePhoto}
                            color={'#5856D6'}
                        />
                        <View style={{ width: 100 }} />
                        <Button
                            title='Gallery'
                            onPress={getPhotoFromGallery}
                            color={'#5856D6'}
                        />
                    </View>
                )}



                {(image.length !== 0 && !tempUri) &&
                    <Image
                        source={{ uri: image }}
                        style={{
                            marginTop: 20,
                            width: '100%',
                            height: 300
                        }}
                    />
                }

                {tempUri &&
                    <Image
                        source={{ uri: tempUri }}
                        style={{
                            marginTop: 20,
                            width: '100%',
                            height: 300
                        }}
                    />
                }

            </ScrollView>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15
    }
});