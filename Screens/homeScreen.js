import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem, Avatar, Header, Icon } from 'react-native-elements';
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

export default class StudentListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      teacherId: firebase.auth().currentUser.uid,
      allStudents: [],
    };
  }

  getStudents = () => {
    db.collection('allStudents')
      .where('teacherId', '==', this.state.teacherId)
      .onSnapshot((snapshot) => {
        var allStudents = [];
        snapshot.docs.map((doc) => {
          var student = doc.data();
          console.log(student);
          student['studentId'] = doc.id;
          console.log(student);
          allStudents.push(student);
        });
        this.setState({
          allStudents: allStudents,
        });
      });
  };

  componentDidMount() {
    this.getStudents();
  }
  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        this.props.navigation.navigate('UpdateStudentDetailsScreen', {
          studentDetails: item,
        });
      }}>
      <ListItem.Content>
        <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
          {item.studentName}
        </ListItem.Title>
        <ListItem.Subtitle>{item.studentCurriculum}</ListItem.Subtitle>
      </ListItem.Content>

      <Feather
        name="arrow-right"
        size={25}
        color="#60CC9A"
        style={{ alignSelf: 'center' }}
      />
    </ListItem>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Header
            centerComponent={{
              text: 'Hello User!Welcome to your Society Community.Keep checking for updates.',
              style: {
                margin: 2,
                padding: 2,
                fontWeight: 'bold',
                fontSize: 19,
                color: '#fff',
              },
            }}
            backgroundColor={'green'}
          />

          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.allStudents}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 25,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  fabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
