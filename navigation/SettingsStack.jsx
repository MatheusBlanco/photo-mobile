import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../pages/DetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SettingsScreen from '../pages/SettingsScreen';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
