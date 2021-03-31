import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seech: '',
    };
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor={'darkcyan'}
          centerComponent={{
            text: 'Text To Speech',
            style: { color: '#fff', fontSize: 25 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.elegantthemes.com/blog/wp-content/uploads/2019/01/000-Text-to-Speech.png',
          }}
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 200,
              alignSelf: 'center',
              
            }}
            onPress={() => {
              this.state.seech === ''
                ? (Speech.speak('write somethin in text box'),
                  Alert.alert('write something in text box'))
                : Speech.speak(this.state.seech);
            }}>
            <Text style={styles.text1}>Press To Hear The Text</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ seech: text });
          }}
          value={this.state.text}
        />
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'green',
    fontSize: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  imageIcon: {
    width: "100%",
    height: 150,
    marginTop: 30,
    alignSelf:'center'

  },
});
