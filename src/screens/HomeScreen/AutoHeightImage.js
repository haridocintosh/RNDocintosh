import { View, Text, Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import Video from 'react-native-video';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import FastImage from 'react-native-fast-image'


const AutoHeightImage = ({items,currentIndex,postIndex}) => {

  // const [isPlaying, setIsPlaying] = React.useState(false); 
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems,SetCarouselItems] = useState(items?.attach_array)
  const videoPlayer = useRef(null);
  const [imgHeight, setImgHeight] = useState();


  const onPlayVideo = (id) => {
    console.log('id',id);
    // setPostId(items.post_id);
    // setPaused(!paused);
  };

  useEffect(() => {
    SetCarouselItems(items?.attach_array)
  },[items?.attach_array])



  const actualHeight = (width,height) => {
      const ratio = Dimensions.get('window').width/width;
      const actual = height * ratio;
      const ActualHeight = actual ? actual : 350;
      return ActualHeight;
  }

  const _renderItem = ({item, index}) => {
        return (
          <View key={index} style={styles.imageVideoContainer}>
            {/* <Text>{item?.fileheight}</Text> */}
              {item?.filename?.includes("mp4") ?
              <TouchableOpacity onPress={() => onPlayVideo(items.post_id)}>
                <Video 
                  // onEnd={onEnd}
                  // onLoad={onLoad}
                  // onLoadStart={onLoadStart}
                  // onProgress={onProgress}
                  paused={currentIndex !== postIndex}
                  ref={videoPlayer}
                  resizeMode={"contain"}
                  // onFullScreen={isFullScreen}
                  source={{uri:item?.filename}} 
                  style={{width:"100%",marginHorizontal:10,zIndex:0, alignSelf:'center',aspectRatio: 0.8}}
                  volume={10}
                  useTextureView={false}
                  playInBackground={false}
                  disableFocus={true}
                  playWhenInactive={false}
                />
              
              {/* <MediaControls
                    duration={duration}
                    isLoading={isLoading}
                    mainColor="#333"
                    onFullScreen={onFullScreen}
                    onPaused={onPaused}
                    onReplay={onReplay}
                    onSeek={onSeek}
                    onSeeking={onSeeking}
                    playerState={playerState}
                    progress={currentTime}
                    toolbar={renderToolbar()}
                  /> */}
               </TouchableOpacity>
              :
              <>
              
              {/* <Image 
                  source={{uri:item?.filename}}
                  style={[styles.multiImageStyle,{height:actualHeight(item?.filewidth,item?.fileheight)}]} 
                  // style={carouselItems?.length > 1 ? styles.multiImageStyle: [styles.imageStyle,{height:imgHeight}]} 
                  resizeMode={"contain"}/> */}
              <FastImage
                  style={[styles.multiImageStyle,{height:actualHeight(item?.filewidth,item?.fileheight)}]} 
                  source={{
                      uri: item?.filename,
                      // headers: { Authorization: 'someAuthToken' },
                      priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
              />
              </>
              }
          </View>
    )
  }

  return (
    // backgroundColor:'rgba(52,119,224,0.3)'
    <View style={{alignItems:'center'}}>
    {carouselItems?.length > 1?<Text style={styles.ImagePaginationCount}>{activeIndex +1}/{carouselItems?.length}</Text> :null}
    <Carousel
        layout={"default"}
        loop={false}
        autoplay={false}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={10000}
        data={items?.attach_array}
        sliderWidth={Dimensions.get("window").width - 50}
        itemWidth={Dimensions.get("window").width - 50}
        renderItem={_renderItem}
        pagingEnabled={true}
        onSnapToItem={index => setActiveIndex(index)} 
    />
        <View style={{alignItems:'center',backgroundColor:'#fff',width:'100%'}}>
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
  },
  imageStyle:{
    width:"100%",
    alignSelf:'center',
    zIndex:0, 
  },  
  multiImageStyle:{
    width:"100%",
    // marginHorizontal:10,
    // aspectRatio:1,
    // borderWidth:1
  },  
  imageVideoContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },  
})
