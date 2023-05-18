import { View, Text,TouchableOpacity} from 'react-native'

const Button = ({title,onPress,color,bgColor,brColor,customStyle}) => {
  return (
    <TouchableOpacity style={{
        ...customStyle,
        backgroundColor:bgColor,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    }}
    onPress={() => onPress()}
    >
        <Text style={{color:color,fontFamily:'PlusJakartaSans-Bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;