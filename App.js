import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Meunome from './componentes/primeiroComponente'
import Cesta from './src/telas/Cesta';


export default function App() {
  return (
     <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
