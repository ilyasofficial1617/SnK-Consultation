import React from 'react';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import sampleData from './SampleData';
import { useTheme } from '@react-navigation/native';

const DoctorBookingScreen = ({route, navigation}) => {
    // access color's theme
    const { colors } = useTheme();
    // get doctor id parameter
    const {doctorId} = route.params
    // get doctor from doctor id
    const getDoctor = (doctorId) =>{
        for (let i = 0; i < sampleData.doctors.length; i++) {
            //if id is the same
            if(sampleData.doctors[i].id == doctorId){               
                return sampleData.doctors[i]
            }
        }
    }
    // doctor data initialize from get doctor id
    const doctorData = getDoctor(doctorId);

    return(
        <View style={{flex:1, padding:'3%', backgroundColor:colors.background}}>
            <View style={styles.profile}>
                <View style={{flex:1, paddingVertical:'2%'}}>
                    <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} 
                        source={{uri:sampleData.doctorIcon}}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20}}>{doctorData.doctorName}</Text>
                    <Text styel>{doctorData.speciality}</Text>
                    <Text/>
                    <Text >Avalaibe</Text>
                </View>
            </View>
            <View style={styles.description}>
                <ScrollView style={{paddingHorizontal:'3%', paddingTop:'3%'}}>
                    <Text style={{marginBottom:'6%'}}>{sampleData.loremIpsum}</Text>
                </ScrollView>
            </View>
            <View style={{flex:1/2, flexDirection:'column-reverse', marginBottom:'3%'}}>
                <TouchableOpacity onPress={()=>{
                    // api open message whatsapp
                    Linking.openURL(
                        'https://wa.me/6289518805511/?text=Hi, i\'d like to make an appointment for dr.'
                        +doctorData.doctorName+' today');
                    }} style={{backgroundColor:colors.primaryAlternative, borderRadius:5, padding:'2%'}}>
                    <Text style={{textAlign:'center', color:colors.onPrimary, fontSize:20}}>Make An Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
}

export default DoctorBookingScreen;

const styles = StyleSheet.create({
    description:{
        flex:4, 
        backgroundColor:'white', 
        marginBottom:'3%', 
        borderRadius:10
    },
    profile:{
        flex:2, 
        backgroundColor:'white', 
        flexDirection:'row', 
        marginBottom:'3%', 
        borderRadius:10
    }
});