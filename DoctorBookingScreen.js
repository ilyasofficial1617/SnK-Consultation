import React from 'react';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import sampleData from './SampleData';
import { useTheme } from '@react-navigation/native';

const DoctorBookingScreen = ({route, navigation}) => {
    const { colors } = useTheme();
    
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
        <View style={{flex:1, padding:'3%', backgroundColor:colors.background}}>
            <View style={{flex:2, backgroundColor:colors.backgroundAlternative, flexDirection:'row', marginBottom:'3%', borderRadius:10}}>
                <View style={{flex:1, paddingVertical:'2%'}}>
                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={{uri:sampleData.doctorIcon}}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20}}>{doctorData.doctorName}</Text>
                    <Text styel>{doctorData.speciality}</Text>
                    <Text/>
                    <Text >Avalaibe</Text>
                </View>
            </View>
            <View style={{flex:4, backgroundColor:colors.backgroundAlternative, marginBottom:'3%', borderRadius:10}}>
                <ScrollView style={{paddingHorizontal:'3%', paddingTop:'3%'}}>
                    <Text style={{marginBottom:'6%'}}>{sampleData.loremIpsum}</Text>
                </ScrollView>
            </View>
            <View style={{flex:1/2, flexDirection:'column-reverse', marginBottom:'3%'}}>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL('https://wa.me/6281358896186/?text=teslagi');
                }} style={{backgroundColor:colors.primaryAlternative, borderRadius:5, padding:'2%'}}>
                    <Text style={{textAlign:'center', color:colors.onPrimary, fontSize:20}}>Make An Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
}

export default DoctorBookingScreen;

const styles = StyleSheet.create({
    
});