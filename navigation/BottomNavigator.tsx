import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaLocalScreen from '../screens/ListaLocalScreen';
import ListaExternaScreen from '../screens/ListaExternaScreen';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: true }}
        >

            <Tab.Screen name="Local" component={ListaLocalScreen} 
            options={{headerShown: false}}
            />
            <Tab.Screen name="Externa" component={ListaExternaScreen} 
            options={{}}
            />
        </Tab.Navigator>
    );
}

export function BottomNavegador() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}