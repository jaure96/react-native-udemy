import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CanculatorScreen from './src/screens/CanculatorScreen'
import { styles } from './src/theme/AppTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor={'black'}
        barStyle='light-content'
      />
      <CanculatorScreen />
    </SafeAreaView>
  )
}

export default App