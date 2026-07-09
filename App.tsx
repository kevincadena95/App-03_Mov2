import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaLocalScreen from './screens/ListaLocalScreen';
import ListaExternaScreen from './screens/ListaExternaScreen';

export default function App() {
  return (
    <ListaExternaScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
