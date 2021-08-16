import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import sampleData from './SampleData';
import SearchBar from "react-native-dynamic-search-bar";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const DoctorListScreen = ({route, navigation}) => {
    // access color's theme
    const { colors } = useTheme();
    // get speciality name parameter
    const {specialityName} = route.params
    // refresh
    const [refresh, setRefresh] = useState(false);
    // original data
    const [dataCache, setDataCache] = useState(sampleData.doctors.slice());
    
    // filter speciality
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

    // data after filtered speciality
    const [dataFilteredSpeciality, setDataFilteredSpeciality] = useState(filterSpeciality(specialityName));
    // data after filtered name  // data changed from changed search bar
    const [dataFilteredName, setDataFilteredName] = useState(dataFilteredSpeciality);

    // filter name // from search bar
    const filterName = (keyword) => {
        const result = []
        for (let i = 0; i < dataFilteredSpeciality.length; i++) {
            let check = dataFilteredSpeciality[i].doctorName.toLowerCase();
            let keycheck = keyword.toLowerCase();
            if(check.includes(keycheck)){
                result.push(dataFilteredSpeciality[i])
            }
        }
        // update data
        setDataFilteredName(result)
        // refresh listview
        setRefresh(!refresh);
    }

    
    
    const ItemDesign = (item) =>{
        return(
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Doctor Booking',{doctorId : item.id});
            }} style={[styles.flatlistItem, {backgroundColor:colors.backgroundAlternative}]}> 
                <Image style={{width:60, height:60}} source={{uri:sampleData.doctorIcon}}/>
                <View style={{flexDirection:'column', paddingHorizontal:10}}>
                    <Text>{item.doctorName}</Text>
                    <Text>{item.speciality}</Text>
                </View>
                <View style={{flex:1}}></View>
                <Image style={{width:40, height:40}} source={{uri:sampleData.arrowIcon}}/>
            </TouchableOpacity>
        );
    }    

    return(
        <View style={[{backgroundColor: colors.background},styles.container]}>
            <SearchBar
                placeholder="Search here"
                // filter name when text changed
                onChangeText={ text => filterName(text)}
                style={{marginBottom:5}}
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
    container:{
        flex: 1, 
        alignItems: 'center', 
        paddingVertical:'3%'
    },
    flatlistContainer:{
        width:SCREEN_WIDTH*97/100,
    },
    flatlistItem:{
        height : 'auto',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:'1%',
        marginVertical:'1%',
        borderRadius:5,
        padding:5
    }
  });
  