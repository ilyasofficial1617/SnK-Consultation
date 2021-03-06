import React, { useState } from 'react';
import { View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import sampleData from './SampleData';

//get dimensions
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const CAROUSEL_VERTICAL_OUTPUT = 50;
export const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

const renderItem = ({item}) => (
    <View style={styles.item}>
        <Image style={styles.image} source={{uri:item.imageUrl}}/>
    </View>
);

const PromotionCarousel = () => {
    return (
        //custom snap carousel
        <Carousel
            data={sampleData.banners}
            renderItem={renderItem}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={CAROUSEL_ITEM_WIDTH}
            loop={true}
            enableSnap={true}
            containerCustomStyle={{flexGrow:0}}
            slideStyle={{borderRadius:6,overflow:'hidden'}}
        />
    )
}

export default PromotionCarousel;

const styles = StyleSheet.create({
    image: {
        aspectRatio: 2/1,
        flex:1
    },
    item: {
        flexDirection: 'row',
    }
  });