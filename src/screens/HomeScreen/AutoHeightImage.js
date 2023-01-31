import { View, Text, Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import Video from 'react-native-video';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const AutoHeightImage = ({item}) => {
  const [isPlaying, setIsPlaying] = React.useState(false); 
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems] = useState(item?.attach_array)
  const videoPlayer = useRef(null);
  const [imgSize, setImgSize] = useState();


  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState('content');

  const videoBuffer = (isBuffer) =>{
    console.log("isBuffer")
    //here you could set the isBuffer value to the state and then do something with it
    //such as show a loading icon
  }
  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);
  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };
  const onLoadStart = (data) => setIsLoading(true);
  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };
  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };
  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };
  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };
  const onSeek = (seek) => {
    //Handler for change in seekbar
    videoPlayer.current.seek(seek);
  };
  const onSeeking = (currentTime) => setCurrentTime(currentTime);
  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );
  // const autoHeight = (url) => {
  // Image.getSize(url, (width, height) => {
  //   if (width && !height) {
  //         setImgSize({
  //             width: width,
  //             height: height * (width / width)
  //         });
  //     } else if (!width && height) {
  //         setImgSize({
  //             width: width * (height / height),
  //             height: height
  //         });
  //     } else {
  //         setImgSize({ width: width, height: height });
  //     }
  // })
  // }

  const _renderItem = ({ item, index }) => {
    return (
          <View key={index} style={styles.imageVideoContainer}>
              {item?.filename?.includes("mp4") ?
              <View>
                <Video 
                  onEnd={onEnd}
                  onLoad={onLoad}
                  onLoadStart={onLoadStart}
                  onProgress={onProgress}
                  paused={paused}
                  ref={videoPlayer}
                  resizeMode={screenType}
                  onFullScreen={isFullScreen}
                  source={{uri:item?.filename}} 
                  style={{width:"100%",marginHorizontal:10,zIndex:0, alignSelf:'center',aspectRatio: 0.8}}
                  volume={10}
                  // onBuffer={videoBuffer}
                  // controls={false}
                  // autoplay={false}
                  // playWhenInactive={false}  
                  // playInBackground={false}
                />

              <MediaControls
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
              />
               </View>
              :
              <>
              {/* {autoHeight(item?.filename)} */}
              <Image 
                  source={{uri:item?.filename}}
                  style={{width:"100%",marginHorizontal:10,alignSelf:'center',zIndex:0,aspectRatio: 1 }} 
                  resizeMode={"contain"}/>
              </>
              }
          </View>
    )
  }

  return (
    <View >
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
        onSnapToItem={index => setActiveIndex(index)} 
      />
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

  
})
