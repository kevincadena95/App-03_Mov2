import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListaLocalScreen from '../screens/ListaLocalScreen';
import ListaExternaScreen from '../screens/ListaExternaScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

//Usando el BOTTOM TAP

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab" component={MyTopTabs} />

        </Tab.Navigator>
    );
}

//Usando el MATERIAL TOP TAP

function MyTopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Local" component={ListaLocalScreen} />
            <TopTab.Screen name="Externa" component={ListaExternaScreen} />
        </TopTab.Navigator>
    );
}


export function MainNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}