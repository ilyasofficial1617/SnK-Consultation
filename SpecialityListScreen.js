import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import sampleData from './SampleData';
import SearchBar from "react-native-dynamic-search-bar";
import { useTheme } from '@react-navigation/native';

const SpecialityListScreen = ({navigation}) => {
    const { colors } = useTheme();
    const [refresh, setRefresh] = useState(false);
    const [dataCache, setDataCache] = useState(sampleData.specialities.slice());

    const filterSpecialities = (keyword) => {
        console.log(dataCache)
        const result = []
        for (let i = 0; i < sampleData.specialities.length; i++) {
            let check = sampleData.specialities[i].speciality.toLowerCase();
            let keycheck = keyword.toLowerCase();
            if(check.includes(keycheck)){
                console.log(check)
                result.push(sampleData.specialities[i])
            }
        }
        setDataCache(result)
        //refresh listview
        setRefresh(!refresh);
    }
    
    const ItemDesign = (item) =>{
        return(
            <TouchableOpacity style={[styles.flatlistItem,{backgroundColor:colors.backgroundAlternative,borderColor:colors.backgroundAlternative,}]}
                onPress={()=>{
                    console.log(item.speciality)
                    navigation.navigate('Doctor List',{specialityName : item.speciality});
                }}
                > 
                <Image style={{width:100, height:100}} source={{uri:sampleData.doctorIcon}}/>
                <Text style={{textAlign:'center', }} >{item.speciality}</Text>
            </TouchableOpacity>
        );
    }    

    return(
        <View style={{flex: 1, backgroundColor: colors.background, alignItems: 'center', paddingVertical:'3%',justifyContent:'space-around'}}>
            <SearchBar
                placeholder="Search here"
                onChangeText={ text => filterSpecialities(text)}
                style={{marginBottom:5}}
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
        
    }
  });
  