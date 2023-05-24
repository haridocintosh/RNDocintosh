import { View, Text,TouchableOpacity} from 'react-native'

const Button = ({title,onPress,color,bgColor,disable,customStyle}) => {
  return (
    <TouchableOpacity style={{
        ...customStyle,
        backgroundColor: bgColor,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        opacity: disable ? 0.37 : 1
    }}
    onPress={() => onPress()}
    disabled={disable}
    >
        <Text style={{color:color,fontFamily:'PlusJakartaSans-Bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;