import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HotelListScreen from '../screens/HotelListScreen';
import HotelDetailScreen from '../screens/HotelDetailScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HotelListScreen" component={HotelListScreen} />
      <Stack.Screen name="HotelDetailScreen" component={HotelDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
