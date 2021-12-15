import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <View>
     <Text>Call A Worker</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
