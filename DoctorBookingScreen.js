import React from 'react';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image} from 'react-native';
import sampleData from './SampleData';

const DoctorBookingScreen = ({route, navigation}) => {
    
    const {doctorId} = route.params
    const getDoctor = (doctorId) =>{
        for (let i = 0; i < sampleData.doctors.length; i++) {
            if(sampleData.doctors[i].id == doctorId){               
                return sampleData.doctors[i]
            }
        }
    }
    const doctorData = getDoctor(doctorId);

    return(
        <View style={{flex:1, padding:'3%'}}>
            <View style={{flex:2, backgroundColor:'red', flexDirection:'row', marginBottom:'3%'}}>
                <View style={{flex:1, backgroundColor:'grey'}}>
                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={{uri:sampleData.doctorIcon}}/>
                </View>
                <View style={{flex:1, backgroundColor:'yellow'}}>
                    <Text>{doctorData.doctorName}</Text>
                    <Text>{doctorData.speciality}</Text>
                    <Text/>
                    <Text>Avalaibe</Text>
                </View>
            </View>
            <View style={{flex:4, backgroundColor:'green', marginBottom:'3%'}}>
                <ScrollView style={{padding:'3%'}}>
                    <Text>{sampleData.loremIpsum}</Text>
                </ScrollView>
            </View>
            <View style={{flex:1, backgroundColor:'blue', flexDirection:'column-reverse', marginBottom:'3%'}}>
                <TouchableOpacity style={{backgroundColor:'grey'}}>
                    <Text style={{textAlign:'center'}}>Make An Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
}

export default DoctorBookingScreen;

const styles = StyleSheet.create({
    
});