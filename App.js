// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import Running from './components/Running';
import Cycling from './components/Cycling';
import Meditation from './components/Meditation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Running" component={Running} />
        <Stack.Screen name="Cycling" component={Cycling} />
        <Stack.Screen name="Meditation" component={Meditation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
