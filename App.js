import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import SpecialityListScreen from './SpecialityListScreen';
import DoctorListScreen from './DoctorListScreen';
import DoctorBookingScreen from './DoctorBookingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{title:"SnK Consultation"}} component={HomeScreen}/>
        <Stack.Screen name="Speciality List" options={{title:"Specialities"}} component={SpecialityListScreen}/>
        <Stack.Screen name="Doctor List" component={DoctorListScreen}/>
        <Stack.Screen name="Doctor Booking" options={{title:"Booking"}} component={DoctorBookingScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;

const styles = StyleSheet.create({
  
});
