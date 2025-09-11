import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Perfil from './componentes/perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!!</Text>
       <Text>Richardson</Text>
zz
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c90a0aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
