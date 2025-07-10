import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainNavigatorParamList } from '../utils/RoutersType';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
