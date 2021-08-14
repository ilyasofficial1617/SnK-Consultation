import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PromotionCarousel from './PromotionCarousel';
import sampleData from './SampleData';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <PromotionCarousel/>
            <SpecialityBit/>
        </View>
    );
}

export default HomeScreen;

const SpecialityBit = () => {
    return(
        <FlatList
            columnWrapperStyle={{justifyContent:'space-between'}}
            data={sampleData.specialities}
            numColumns={2}
            renderItem = {({item})=>(SpecialityItem(item))}
        />
    )
}

const SpecialityItem = (specialityDataItem) => {
    return(
        <View>
            <Text>{specialityDataItem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bbb',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:'3%',
      paddingVertical:'3%'
    },
  });