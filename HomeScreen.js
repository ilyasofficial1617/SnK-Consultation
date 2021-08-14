import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import PromotionCarousel from './PromotionCarousel';
import sampleData from './SampleData';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <PromotionCarousel/>
            <SpecialityBit/>
            <DoctorsBit/>
        </View>
    );
}

export default HomeScreen;

const SpecialityBit = () => {
    const specialities = sampleData.specialities.slice(0,3);

    return(
        <View style={{flex: 2, flexWrap: 'wrap', flexDirection:'row'}}>
            {
                specialities.map((item)=>(
                    <View style={{width: '30%', backgroundColor:'white', flexGrow:1, alignItems:'center'}}>
                        <Image style={{width:100, height:100}} source={{uri:'https://drive.google.com/uc?export=download&id=1McZiN7QGMoUkT3ExHrFYuUBhE8Lnp88S'}}/>
                        <Text style={{textAlign:'center'}}>
                            {item}
                        </Text>
                    </View>
                )
                )
                
            }
            <View style={{width: '30%', backgroundColor:'white', flexGrow:1, alignContent:'flex-end'}}>
                <Text style={{textAlign:'right'}}>See All</Text>
            </View>
        </View>
    )
}

const DoctorsBit = () => {
    const doctors = sampleData.doctors.slice(0,5);
    return(
        <View style={{flex: 3, flexWrap: 'wrap', flexDirection:'row'}}>
            {
                doctors.map((item)=>(
                    <View style={{width: '100%', backgroundColor:'white', flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width:30, height:30}} source={{uri:'https://drive.google.com/uc?export=download&id=1McZiN7QGMoUkT3ExHrFYuUBhE8Lnp88S'}}/>
                        <Text>
                            {item.doctor_name}
                        </Text>
                    </View>
                )
                )
                
            }
            <View style={{width: '30%', backgroundColor:'white', flexGrow:1, alignContent:'flex-end'}}>
                <Text style={{textAlign:'right'}}>See All</Text>
            </View>
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