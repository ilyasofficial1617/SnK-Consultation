import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import SpecialityScreen from './SpecialityScreen';
import DoctorListScreen from './DoctorListScreen';
import DoctorBookingScreen from './DoctorScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{title:"SnK Consultation"}} component={HomeScreen}/>
        <Stack.Screen name="Speciality" options={{title:"Speciality"}} component={SpecialityScreen}/>
        <Stack.Screen name="Doctor List" component={DoctorListScreen}/>
        <Stack.Screen name="DoctorBooking" options={{title:"Booking"}} component={DoctorBookingScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;

const styles = StyleSheet.create({
  
});
