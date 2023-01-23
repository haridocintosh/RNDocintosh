import React, {Component} from 'react';
import {
  Animated,
  BackHandler,
  Dimensions,
  Easing,
  Keyboard,
  PanResponder,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign,Ionicons, FontAwesome ,FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelVisible: props.isOpen,
      isPanelOpened: props.isOpen,
      contentHeight: undefined,
    };
    this.panelHeightValue = new Animated.Value(0);
    this._setPanResponders();
  }

  togglePanel = () => {
    const {contentHeight, isPanelOpened} = this.state;
    const {
      animationDuration,
      animation,
      sliderMinHeight,
      onOpen,
      onClose,
    } = this.props;

    Animated.timing(this.panelHeightValue, {
      duration: animationDuration,
      easing: animation,
      toValue: this.panelHeightValue._value === 0
        ? contentHeight - sliderMinHeight
        : 0,
      useNativeDriver: false,
    }).start(() => {
      this.setState({isPanelOpened: !isPanelOpened}, () => {
        if (this.state.isPanelOpened) {
          onOpen();
        } else {
          onClose();
          Keyboard.dismiss();
        }
      });
    });
  };

  _onBackPress = () => {
    this.state.isPanelOpened && this.togglePanel();
    return this.state.isPanelOpened;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _setPanResponders() {
    this._parentPanResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => !this.state.isPanelOpened,
      onPanResponderRelease: () => this.togglePanel(),
    });

    this._childPanResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (_, gestureState) =>
        gestureState.dy > 15,
      onPanResponderRelease: (_, gestureState) =>
        gestureState.dy > 0 && this.togglePanel(),
    });
  }

  _handleScrollEndDrag = ({nativeEvent}) => {
    nativeEvent.contentOffset.y === 0 && this.togglePanel();
  };

  _setSize = ({nativeEvent}) => {
    this.setState({contentHeight: nativeEvent.layout.height}, () => {
      const {isOpen, sliderMinHeight} = this.props;
      const {contentHeight} = this.state;
      if (!isOpen && contentHeight) {
        this.panelHeightValue.setValue(contentHeight - sliderMinHeight);
        this.setState({isPanelVisible: true});
      }
    });
  };

  render() {
    const {isPanelVisible} = this.state;
    const {
      sliderMaxHeight,
      wrapperStyle,
      outerContentStyle,
      innerContentStyle,
      lineContainerStyle,
      lineStyle,
      children,
    } = this.props;

    return (
     
      <Animated.View
        onLayout={this._setSize}
        {...this._parentPanResponder.panHandlers}
        style={{
          ...styles.container,
          ...wrapperStyle,
          maxHeight: sliderMaxHeight,
          transform: [
            {translateY: this.panelHeightValue},
            {scale: isPanelVisible ? 1 : 0},
          ],
        }}>
      
        <View
          style={[styles.outerContent, outerContentStyle]}
          {...this._childPanResponder.panHandlers}>
          <TouchableOpacity onPress={this.togglePanel} activeOpacity={1}>
            <View style={[styles.lineContainer, lineContainerStyle]}>
              <View style={[styles.line, lineStyle]} />
            </View>
          </TouchableOpacity>
          <ScrollView
          showsVerticalScrollIndicator={false}
          >

       
          <View style={[styles.innerContent, innerContentStyle]}>
            {typeof children === 'function'
              ? children(this._handleScrollEndDrag)
              : children}
              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <AntDesign name="pluscircle" size={16} color="#45B5C0" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                My Circle
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>
              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <Ionicons name="person" size={16} color="#45B5C0" style={{marginTop:1}}/>
             
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                My Connection
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <FontAwesome name="users" size={16} color="#45B5C0" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                My Community
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              
              <FontAwesome5 name="whatsapp-square" size={16} color="#45D354" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Whatsapp
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <AntDesign name="facebook-square" size={16} color="#4267B2" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Facebook
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="instagram-square" size={16} color="#8C3AAA" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Instagram Story
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="instagram-square" size={16} color="#8C3AAA" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Instagram Message
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
            
              <MaterialCommunityIcons name="android-messages" size={18} color="#8AB4F8" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Message
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <Ionicons name="mail" size={16} color="#45B5C0" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Email
                </Text>
              </View>
              </TouchableOpacity>
              <View style={{borderColor:'#D5DEED',borderWidth:0.2, width:'100%',  }}></View>

              <TouchableOpacity style={{margin:10, alignSelf:'flex-start', flex:1, }}>
              <View style={{flexDirection:'row'}}>
              <Entypo name="link" size={16} color="#45B5C0" style={{marginTop:1}} />
                <Text style={{fontSize:14, fontWeight:'400', marginLeft:14}}>
                Generate Link
                </Text>
              </View>
              </TouchableOpacity>
              
          </View>
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}

BottomSheet.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isOpen: PropTypes.bool,
  sliderMaxHeight: PropTypes.number,
  sliderMinHeight: (props, propName, _) => {
    if (props[propName] > props.sliderMaxHeight) {
      return new Error(
        'sliderMinHeight value cannot be greater than sliderMaxHeight',
      );
    }
  },
  animation: PropTypes.func,
  animationDuration: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  wrapperStyle: PropTypes.object,
  outerContentStyle: PropTypes.object,
  innerContentStyle: PropTypes.object,
  lineContainerStyle: PropTypes.object,
  lineStyle: PropTypes.object,
};

BottomSheet.defaultProps = {
  children: <View />,
  isOpen: true,
  sliderMaxHeight: Dimensions.get('window').height * 0.5,
  sliderMinHeight: 50,
  animation: Easing.quad,
  animationDuration: 200,
  onOpen: () => null,
  onClose: () => null,
  wrapperStyle: {},
  outerContentStyle: {},
  innerContentStyle: {},
  lineContainerStyle: {},
  lineStyle: {},
};

const styles = {
  container: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    paddingHorizontal: 21,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#ffffff',
  },
  lineContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 35,
    height: 4,
    borderRadius: 2,
    marginTop: 18,
    marginBottom: 30,
    backgroundColor: '#D5DDE0',
  },
  outerContent: {
    flex: -1,
  },
  innerContent: {
    flex: -1,
    height:'100%'
  },
};

export default BottomSheet;