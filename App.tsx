import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaLocalScreen from './screens/ListaLocalScreen';
import ListaExternaScreen from './screens/ListaExternaScreen';
import { BottomNavegador } from './navigation/BottomNavigator';
import { MaterialTopTabNavegador } from './navigation/MaterialTopTabNavigator';
import { MainNavigator } from './navigation/MainNavigator';

export default function App() {
  return (
    <MainNavigator/>
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
