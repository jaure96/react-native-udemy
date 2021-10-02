import React from 'react'
import { SafeAreaView } from 'react-native'
import TareaScreen from './src/screens/Tasks/TareaScreen_10'
/* import FlexScreen from './src/screens/FlexScreen' */
/* import PositionScreen from './src/screens/PositionScreen' */
/* import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen' */
/* import CounterScreen from './src/screens/CounterScreen' */
/* import DimensionsScreen from './src/screens/DimensionsScreen' */


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*  <CounterScreen /> */}
      {/*  <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen/> */}
      <TareaScreen />
    </SafeAreaView>

  )
}

export default App
