import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('List');
      })
      .catch((error) => {
        var errorcode = error.code;
        var errorM = error.message;
        console.log(errorM);
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/app bg.jpg')}
          style={styles.image}>
          <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
            }}>
          </View>
          <KeyboardAvoidingView style={{ marginTop: 20, alignItems: 'center' }}>
            <View style={styles.inputContainer}>
              <View style={styles.iconStyle}>
                <Entypo name={'mail'} size={25} color="rgb(0, 174, 255)" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgb(0, 174, 255)"
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                value={this.state.email}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconStyle}>
                <AntDesign name={'eye'} size={25} color="rgb(0, 174, 255)" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="rgb(0, 174, 255)"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.login(this.state.email, this.state.password);
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '55%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                marginTop: 5,
              }}
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}>
              <Text style={{ fontSize: 16, color: 'black',fontWeight: 'bold'}}>
                Not a user? Sign up
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    width: '80%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
  },
  buttonText: {
    color: 'rgb(0, 174, 255)',
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 203, 255)'
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderRadius: 20,
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'pink',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 5,
    flex: 1,
    fontSize: 18,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
