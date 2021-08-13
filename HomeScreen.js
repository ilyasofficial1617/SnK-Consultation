import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PromotionCarousel from './PromotionCarousel';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <PromotionCarousel/>
        </View>
    );
    
}

export default HomeScreen;

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