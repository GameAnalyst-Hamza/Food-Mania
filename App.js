import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavScreen from './src/screens/NavScreen';
const Stack = createStackNavigator();
export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavScreen"
          component={NavScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
