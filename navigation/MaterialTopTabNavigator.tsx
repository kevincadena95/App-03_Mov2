import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListaLocalScreen from '../screens/ListaLocalScreen';
import ListaExternaScreen from '../screens/ListaExternaScreen';
import { NavigationContainer } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Local" component={ListaLocalScreen} />
            <TopTab.Screen name="Externa" component={ListaExternaScreen} />
        </TopTab.Navigator>
    );
}

export function MaterialTopTabNavegador() {
    return (
        <NavigationContainer>
            <MyTopTabs />
        </NavigationContainer>
    )
}