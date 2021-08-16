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
  //color theme
  const myTheme = {
    dark: false,
    colors: {
      primary: 'rgb(26,114,207)',
      secondary: 'rgb(207,120,26)',
      background: 'rgb(227,241,253)',
      notification: 'rgb(176,0,32)',
      onPrimary: 'rgb(255,255,255)',
      onSecondary: 'rgb(0,0,0)',
      onBackground: 'rgb(0,0,0)',
      onNotification : 'rgb(255,255,255)',
      primaryAlternative: 'rgb(23,97,189)',
      secondaryAlternative: 'rgb(207,120,26)',
      backgroundAlternative: 'rgb(255,255,255)',
      notificationAlternative: 'rgb(176,0,32)',
    },
  };
  let selectedTheme = myTheme;

  return (
    //navigation  //pass theme into screen
    <NavigationContainer theme={selectedTheme}>
      <Stack.Navigator 
        initialRouteName="Home"
        //set header color to theme
        screenOptions={{
          headerStyle:{backgroundColor:selectedTheme.colors.primary}, 
          headerTintColor:selectedTheme.colors.onPrimary,
        }}
        //screens
      >
        <Stack.Screen name="Home" options={{title:"SnK Consultation"}}  component={HomeScreen}/>
        <Stack.Screen name="Speciality List" options={{title:"Specialities"}} component={SpecialityListScreen}/>
        <Stack.Screen name="Doctor List" component={DoctorListScreen}
          //change header title based on specialityName
          options={({route})=>({title: route.params.specialityName})} 
          initialParams={{specialityName:'Doctor'}}/>
        <Stack.Screen name="Doctor Booking" options={{title:"Booking"}} component={DoctorBookingScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;


