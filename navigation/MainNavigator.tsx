import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import CatalogoScreen from '../screens/CatalogoScreen';
import FavoritosScreen from '../screens/FavoritosScreen';
import PerfilScreen from '../screens/PerfilScreen';
import PortadaBichosScreen from '../screens/PortadaBichosScreen';
import InsectosScreen from '../screens/InsectosScreen';
import InformacionInsectosScreen from '../screens/InformacionInsectosScreen';

const Stack=createStackNavigator()
const Bottom=createBottomTabNavigator()

function MyStack(){
    return(
        <Stack.Navigator initialRouteName='Catalogo'>
            <Stack.Screen name='Catalogo' component={CatalogoScreen}/>
            <Stack.Screen name='Favoritos' component={FavoritosScreen}/>
            <Stack.Screen name='PerfilUser' component={PerfilScreen}/>
            <Stack.Screen name='Bottom' component={MyBottom}/>
        </Stack.Navigator>
    )
}

function MyBottom(){
    return(
        <Bottom.Navigator initialRouteName='PBichos'>
            <Bottom.Screen name='PBichos' component={PortadaBichosScreen}/>
            <Bottom.Screen name='ListaBichos' component={InsectosScreen}/>
            <Bottom.Screen name='InfoBichos' component={InformacionInsectosScreen}/>
        </Bottom.Navigator>
    )
}

export function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}