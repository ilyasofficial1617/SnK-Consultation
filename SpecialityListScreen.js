import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import sampleData from './SampleData';
import SearchBar from "react-native-dynamic-search-bar";
import { useTheme } from '@react-navigation/native';

const SpecialityListScreen = ({navigation}) => {
    // access color's theme
    const { colors } = useTheme();
    // refresh or re render flatlist
    const [refresh, setRefresh] = useState(false);
    // rendered data
    const [dataCache, setDataCache] = useState(sampleData.specialities.slice());

    // searching specialities
    const filterSpecialities = (keyword) => {
        const result = []
        for (let i = 0; i < sampleData.specialities.length; i++) {
            let check = sampleData.specialities[i].speciality.toLowerCase();
            let keycheck = keyword.toLowerCase();
            // check if a portion string exist
            if(check.includes(keycheck)){
                result.push(sampleData.specialities[i])
            }
        }
        // updated data cache
        setDataCache(result)
        // refresh flatlist
        setRefresh(!refresh);
    }
    
    // item
    const ItemDesign = (item) =>{
        return(
            <TouchableOpacity style={styles.flatlistItem}
                onPress={()=>{
                    navigation.navigate('Doctor List',{specialityName : item.speciality});
                }}> 
                <Image style={{width:100, height:100}} source={{uri:sampleData.doctorIcon}}/>
                <Text style={{textAlign:'center', }} >{item.speciality}</Text>
            </TouchableOpacity>
        );
    }    

    return(
        <View style={{flex: 1, backgroundColor: colors.background, alignItems: 'center', paddingVertical:'3%',justifyContent:'space-around'}}>
            <SearchBar
                placeholder="Search here" style={{marginBottom:5}}
                // filter when text changed
                onChangeText={ text => filterSpecialities(text)}
            />
            <FlatList
                    removeClippedSubviews={false}
                    extraData={refresh}
                    contentContainerStyle={styles.flatlistContainer}
                    numColumns={3}
                    data={dataCache}
                    keyExtractor={( {id},index) => id.toString()}
                    renderItem = {({item})=>(ItemDesign(item))}
            />
        </View>
    );
    
}

export default SpecialityListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        paddingHorizontal:'3%',
        paddingVertical:'3%',
    },
    flatlistContainer:{
        width:'100%'
    },
    flatlistItem:{
        height : 'auto',
        width:'31%',
        flexDirection:'column',
        alignItems:'center',
        marginHorizontal:'1%',
        marginVertical:'1%',
        borderWidth:1,
        borderRadius:5,
        padding:5,
        backgroundColor:'white',
        borderColor:'white'
        
    }
  });
  