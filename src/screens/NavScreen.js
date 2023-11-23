import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import authReducer from '../../store/reducers/auth';
import AuthScreen from './AuthScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import ResultsShowScreen from './ResultsShowScreen';
import StartupScreen from './StartupScreen';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';
import Map from './Map';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function NavScreen({ navigation }) {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Startup">
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            title: 'Search',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Auth')}
                style={styles.btnStyle}>
                <Text style={styles.logStyle}>LogOut</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Results"
          component={ResultsShowScreen}
          options={({ navigation }) => ({
            title: 'Restaurant Details',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Auth')}
                style={styles.btnStyle}>
                <Text style={styles.logStyle}>LogOut</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    marginRight: 5,
    borderColor: '#FC4C4E',
    borderBottomWidth: 1,
  },
  logStyle: {
    color: '#FC4C4E',
  },
});
