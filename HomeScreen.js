import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import PromotionCarousel from './PromotionCarousel';
import sampleData from './SampleData';
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <PromotionCarousel/>
            <SpecialityBit navigation={navigation}/>
            <DoctorsBit navigation={navigation}/>
        </View>
    );
}

export default HomeScreen;

const SpecialityBit = ({navigation}) => {
    const specialities = sampleData.specialities.slice(0,3);

    return(
        <View style={{flex: 2, flexWrap: 'wrap', flexDirection:'row'}}>
            {
                specialities.map((item)=>(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Doctor List',{ specialityName : item.speciality});
                    }} key={item.id} style={{width: '30%', backgroundColor:'white', flexGrow:1, alignItems:'center'}}>
                        <Image style={{width:100, height:100}} source={{uri:sampleData.doctorIcon}}/>
                        <Text style={{textAlign:'center'}}>
                            {item.speciality}
                        </Text>
                    </TouchableOpacity>
                )
                )
                
            }
            <View style={{width: '30%', backgroundColor:'white', flexGrow:1, alignContent:'flex-end'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Speciality List');
                }}>
                    <Text style={{textAlign:'right'}}>See All</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const DoctorsBit = ({navigation}) => {
    const doctors = sampleData.doctors.slice(0,5);
    return(
        <View style={{flex: 3, flexWrap: 'wrap', flexDirection:'row'}}>
            {
                doctors.map((item)=>(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Doctor Booking');
                    }} key={item.id} style={{width: '100%', backgroundColor:'white', flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width:30, height:30}} source={{uri:sampleData.doctorIcon}}/>
                        <Text>
                            {item.doctorName}
                        </Text>
                    </TouchableOpacity>
                )
                )
                
            }
            <TouchableOpacity onPress={()=>{
                    navigation.navigate('Doctor List');
                }} style={{width: '30%', backgroundColor:'white', flexGrow:1, alignContent:'flex-end'}}>
                <Text style={{textAlign:'right'}}>See All</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        paddingHorizontal:'3%',
        paddingVertical:'3%',
        justifyContent:'space-around'
    },
  });