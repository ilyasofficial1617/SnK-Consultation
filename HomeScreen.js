import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import PromotionCarousel from './PromotionCarousel';
import sampleData from './SampleData';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    //access color's theme
    const { colors } = useTheme();
    return(
        <View style={[styles.container,{backgroundColor:colors.background}]}>
            <View style={{flex:2.1}}>
                <PromotionCarousel />
            </View>
            <SpecialityBit navigation={navigation}/>
            <DoctorsBit navigation={navigation}/>
        </View>
    );
}

export default HomeScreen;

const SpecialityBit = ({navigation}) => {
    // limit show 3 speciality
    const specialities = sampleData.specialities.slice(0,3);

    return(
        <View style={{flex: 2.7, flexWrap: 'wrap', flexDirection:'row'}}>
            {
                //map data into item
                specialities.map((item)=>(
                    <TouchableOpacity onPress={()=>{
                        //go to doctor list with speciality parameter
                        navigation.navigate('Doctor List',{ specialityName : item.speciality});
                    }} key={item.id} style={styles.specialityItemBit}>
                        <Image style={{width:100, height:100}} source={{uri:sampleData.doctorIcon}}/>
                        <Text style={{textAlign:'center'}}>
                            {item.speciality}
                        </Text>
                    </TouchableOpacity>
                )
                )
                
            }
            <View style={{flexGrow:1}}>
                <TouchableOpacity onPress={()=>{
                    //go to doctor list
                    navigation.navigate('Speciality List');
                }} style={{ backgroundColor:'white', flexGrow:1,paddingVertical:2}}>
                    <Text style={{textAlign:'center'}}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const DoctorsBit = ({navigation}) => {
    const { colors } = useTheme();
    const doctors = sampleData.doctors.slice(0,5);    
    return(
        <View style={{flex: 3, flexWrap: 'wrap', flexDirection:'row'}}>
            {
                doctors.map((item)=>(
                    <TouchableOpacity onPress={()=>{
                        //go to doctor booking with doctor id parameter
                        navigation.navigate('Doctor Booking',{doctorId : item.id});
                    }} key={item.id} style={styles.doctorItemBit}>
                        <Image style={{width:30, height:30}} source={{uri:sampleData.doctorIcon}}/>
                        <Text>
                            {item.doctorName}
                        </Text>
                    </TouchableOpacity>
                )
                )
                
            }
            <TouchableOpacity onPress={()=>{
                    //go to doctor list
                    navigation.navigate('Doctor List');
                }} style={{ backgroundColor:'white', flexGrow:1,paddingVertical:2}}>
                <Text style={{textAlign:'center'}}>See All</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal:'3%',
        paddingVertical:'3%',
        justifyContent:'space-around'
    },
    specialityItemBit : {
        width: '30%', 
        backgroundColor:'white', 
        flexGrow:1, 
        alignItems:'center', 
        marginBottom:5, 
        padding:10, 
        marginHorizontal:2, 
        borderRadius:5
    },
    doctorItemBit : {
        width: '100%', 
        flexDirection:'row', 
        alignItems:'center', 
        backgroundColor:'white', 
        padding:5, 
        marginBottom:5, 
        borderRadius:5
    }
  });