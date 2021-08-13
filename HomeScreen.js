import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PromotionCarousel from './PromotionCarousel';

const dataBanner = [
    {
        link : 'https://drive.google.com/drive/folders/1JIjfGWg01HlwLbRa1l0AdMLhTfcYuo_b',
        imageUrl : 'https://drive.google.com/uc?export=download&id=1EN6cQ9FCuMugdGOvHn1tHUJnMIUEhyZk'
    }, 
    {
        link : 'https://drive.google.com/drive/folders/1JIjfGWg01HlwLbRa1l0AdMLhTfcYuo_b',
        imageUrl : 'https://drive.google.com/uc?export=download&id=19MslqBW7e0ph9lEAeA5BNaC1mKqhF5jb'
    }, 
    {
        link : 'https://drive.google.com/drive/folders/1JIjfGWg01HlwLbRa1l0AdMLhTfcYuo_b',
        imageUrl : 'https://drive.google.com/uc?export=download&id=155Su4F1UXJztDeAIcVKZLYgM_5f4G1tB'
    }
]




const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <PromotionCarousel data={dataBanner}/>
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