import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import sampleData from './SampleData';
import SearchBar from "react-native-dynamic-search-bar";
import { color } from 'react-native-elements/dist/helpers';

const SCREEN_WIDTH = Dimensions.get('window').width;

const DoctorListScreen = ({navigation}) => {
    const [refresh, setRefresh] = useState(false);
    const [dataCache, setDataCache] = useState(sampleData.doctors.slice());

    const filterName = (keyword) => {
        console.log(dataCache)
        const result = []
        for (let i = 0; i < sampleData.doctors.length; i++) {
            let check = sampleData.doctors[i].doctor_name.toLowerCase();
            let keycheck = keyword.toLowerCase();
            if(check.includes(keycheck)){
                console.log(check)
                result.push(sampleData.doctors[i])
            }
        }
        setDataCache(result)
        //refresh listview
        setRefresh(!refresh);
    }
    
    const ItemDesign = (item) =>{
        return(
            <TouchableOpacity style={styles.flatlistItem}> 
                <Image style={{width:40, height:40}} source={{uri:sampleData.doctor_icon}}/>
                <View style={{flexDirection:'column'}}>
                    <Text>{item.doctor_name}</Text>
                    <Text>{item.speciality}</Text>
                </View>
                <View style={{flex:1}}></View>
                <Image style={{width:40, height:40}} source={{uri:sampleData.doctor_icon}}/>
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
                    data={dataCache}
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
  