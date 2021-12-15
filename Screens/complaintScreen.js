import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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

export default class ViewComplaints extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
         <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Header
            centerComponent={{
              text: 'Your Complaints',
              style: {
                fontWeight: 'bold',
                fontSize: 19,
                color: 'white',
              },
            }}
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#ffffff"
                onPress={() => this.props.navigation.goBack()}></Icon>
            }
            backgroundColor={'green'}
          />
     <View>
     <Text>View Your Complaints</Text>
     </View>
   </View>
   </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  updateButton: {
    width: '60%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
  },
  textinput: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
   textinput2: {
    marginTop: 5,
    marginBottom: 5,
    width: '80%',
    height: 100,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
});
