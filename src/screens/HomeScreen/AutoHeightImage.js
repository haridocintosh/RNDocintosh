import { View, Text, Image,StyleSheet,Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

import Video from 'react-native-video';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const AutoHeightImage = ({item}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems] = useState(item?.attach_array)
  
  const video = useRef(null);

  const _renderItem = ({ item, index }) => {
    return (
          <View key={index}>
              {item?.filename?.includes("mp4") ?
                <Video 
                  ref={video}
                  controls={true}
                  source={{uri:item?.filename}} 
                  playInBackground={false}
                  style={{width:"100%",marginHorizontal:10,alignSelf:'center',aspectRatio: 0.8 }}
                />
              :
                <Image 
                  source={{uri:item?.filename}}
                  style={{width:"100%",marginHorizontal:10,alignSelf:'center',aspectRatio: 1 }} 
                  resizeMode={"contain"}/> 
              }
          </View>
    )
  }

  return (
    <View>
    {carouselItems?.length > 1?<Text style={styles.ImagePaginationCount}>{activeIndex +1}/{carouselItems?.length}</Text> :null}
    <Carousel
        layout={"default"}
        loop={false}
        autoplay={false}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={10000}
        data={item?.attach_array}
        sliderWidth={Dimensions.get("window").width - 50}
        itemWidth={Dimensions.get("window").width - 50}
        renderItem={_renderItem}
        pagingEnabled={true}
        onSnapToItem={index => setActiveIndex(index)} />

        <View>
        <Pagination
          dotsLength={carouselItems?.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 25,
            height: 10,
            marginHorizontal: -7,
            borderRadius: 5,
            backgroundColor: '#2C8892',
          }}
          inactiveDotStyle={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            width: 15,
            height: 15,
            borderRadius: 10,
          }}
          inactiveDotOpacity={0 + .4}
          inactiveDotScale={0.6}
        />
        </View>
    </View>
  )
}

export default AutoHeightImage;

export const styles = StyleSheet.create({
  wrapper:{
    height:350,
  },
  paginationStyle:{
    position:'absolute',
    right:15,
    top:15,
    backgroundColor:'#f2f2f2',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:20
  },
  ImagePaginationCount:{
    backgroundColor: 'rgba(0,0,0,0.7)',
    position:'absolute',
    paddingHorizontal:10,
    borderRadius:15,
    paddingVertical:2,
    color:'#fff',
    zIndex:1,
    right:10,
    top:10,
    fontFamily:'Inter-SemiBold'
  }
})
