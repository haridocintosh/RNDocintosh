import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
 
import OTPTextView  from 'react-native-otp-textinput';
 
export default class OtpvaryScreen extends Component {
  state = {
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  }
 
  alertText = () => {
    const { text1 = '', text2 = '', text3 = '', text4 = '' } = this.state;
    Alert.alert(`${text1}, ${text2}, ${text3}, ${text4}`);
  } 
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>OTP TextView</Text>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          handleTextChange={text => this.setState({ text1: text })}
          inputCount={4}
          keyboardType="numeric"
        />
        <Text style={styles.instructions}>Custom OTP TextView 1</Text>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          handleTextChange={text => this.setState({ text2: text })}
          textInputStyle={styles.roundedTextInput}
          inputCount={4}
        />
        <Text style={styles.instructions}>Custom OTP TextView 2</Text>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          handleTextChange={text => this.setState({ text3: text })}
          textInputStyle={styles.roundedTextInput}
          inputType="text"
          cellTextLength={2}
          inputCount={4}
        />
        <Text style={styles.instructions}>Custom OTP TextView 3</Text>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          handleTextChange={text => this.setState({ text4: text })}
          textInputStyle={[styles.roundedTextInput, {borderRadius: 100} ]}
          tintColor="#000"
          inputCount={4}
        />
        <Button title="Log Text" onPress={this.alertText} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
});