import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
            backgroundColor = {'#897C80'}
            centerComponent = {{
              text: 'Text to Speech Converter',
              style: {fontSize:15, fontWeight:'bold'}
            }}
        
        />

        <Image style={styles.imageIcon} source={require('./logo.png')} />

        <Text style={styles.title}>ENTER THE WORD</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(name) => this.setState({ name: name })}
          value={this.state.name}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.name;
            word === '' ? alert ('Please type in a message') : this.speak();
           }}>

          <Text style={styles.buttonText}>Convert</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFF7',
  },
  inputBox: {
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginLeft: 30
  },

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 70,
    fontSize: 17,

  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 100,
    width: 200,
    height: 50,
    borderWidth: 2,
    backgroundColor:'black'
  },
  
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: 'white',
    padding: 13,

  },
});
