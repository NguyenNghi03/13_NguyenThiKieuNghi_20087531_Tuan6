import React from "react";
import Lab3a from "./code/Lab3a"
import Lab3b from "./code/Lab3b"
import Lab3c from "./code/Lab3c"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Lab3a" component={Lab3a}/>
        <Stack.Screen name="Lab3b" component={Lab3b}/>
        <Stack.Screen name="Lab3c" component={Lab3c}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
