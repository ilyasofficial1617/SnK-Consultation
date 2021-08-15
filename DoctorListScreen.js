import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import sampleData from './SampleData';
import SearchBar from "react-native-dynamic-search-bar";
import { color } from 'react-native-elements/dist/helpers';
import { useNavigation, useRoute } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const DoctorListScreen = ({route, navigation}) => {
    const {specialityName} = route.params
    const [refresh, setRefresh] = useState(false);
    const [dataCache, setDataCache] = useState(sampleData.doctors.slice());
    
    const filterSpeciality = (specialityName) => {
        if(specialityName=='Doctor') return dataCache;
        const result=[]
        for (let i = 0; i < dataCache.length; i++){
            if(dataCache[i].speciality.localeCompare(specialityName)==0){
                result.push(dataCache[i]);
            }
        }
        return result;
    }

    const [dataFilteredSpeciality, setDataFilteredSpeciality] = useState(filterSpeciality(specialityName));
    const [dataFilteredName, setDataFilteredName] = useState(dataFilteredSpeciality);

    const filterName = (keyword) => {
        const result = []
        for (let i = 0; i < sampleData.doctors.length; i++) {
            let check = sampleData.doctors[i].doctorName.toLowerCase();
            let keycheck = keyword.toLowerCase();
            if(check.includes(keycheck)){
                result.push(sampleData.doctors[i])
            }
        }
        setDataFilteredName(result)
        //refresh listview
        setRefresh(!refresh);
    }

    
    
    const ItemDesign = (item) =>{
        return(
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Doctor Booking',{doctorId : item.id});
            }} style={styles.flatlistItem}> 
                <Image style={{width:60, height:60}} source={{uri:sampleData.doctorIcon}}/>
                <View style={{flexDirection:'column'}}>
                    <Text>{item.doctorName}</Text>
                    <Text>{item.speciality}</Text>
                </View>
                <View style={{flex:1}}></View>
                <Image style={{width:40, height:40}} source={{uri:sampleData.arrowIcon}}/>
            </TouchableOpacity>
        );
    }    

    return(
        <View style={{flex: 1, backgroundColor: '#bbb', alignItems: 'center', paddingVertical:'3%'}}>
            <SearchBar
                placeholder="Search here"
                onChangeText={ text => filterName(text)}
            />
            <FlatList
                    removeClippedSubviews={false}
                    extraData={refresh}
                    contentContainerStyle={styles.flatlistContainer}
                    data={dataFilteredName}
                    keyExtractor={( {id},index) => id.toString()}
                    renderItem = {({item})=>(ItemDesign(item))}
            />
        </View>
    );
    
}

export default DoctorListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        paddingHorizontal:'3%',
        paddingVertical:'3%',
    },
    flatlistContainer:{
        width:SCREEN_WIDTH*97/100,
    },
    flatlistItem:{
        height : 'auto',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:'1%',
        marginVertical:'2%',
        borderColor:'black',
        borderWidth:1,
        padding:5
    }
  });
  