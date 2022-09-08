import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductosView from "./tabs/productos";
const Tab = createBottomTabNavigator();

function Home (){
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Inicio!</Text>
    </View>
  );
}

function Config (){
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Configuraciones de app!</Text>
    </View>
  );
}
const tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/> 
        <Tab.Screen name="Productos" component={ProductosView}/> 
        <Tab.Screen name="Configuraciones" component={Config}/>
      </Tab.Navigator>
    </NavigationContainer>


  );
}