import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen options={{headerShown: false}} component={Login} name="Login" />
        <Stack.Screen options={{headerShown: false}} component={Signup} name="Signup" />
        <Stack.Screen options={{headerShown: false}} component={ForgotPassword} name="ForgotPassword" />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation