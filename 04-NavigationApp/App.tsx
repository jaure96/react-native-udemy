import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './src/navigator/MyDrawer'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    </AppState>
    

  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App
