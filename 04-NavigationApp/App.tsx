import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './src/navigator/MyDrawer'

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

  )
}

export default App
