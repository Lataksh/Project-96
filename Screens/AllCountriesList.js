import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CoviGuard from '../assets/CoviGuard';
import Header from '../Components/Headers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../Config';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';

export default class AllCountryList extends React.Component {
  constructor() {
    super();
    this.state = {
      allCountry: [],
    };
  }

  getData = async () => {
    var localData = [];
    return fetch('https://coronavirus-19-api.herokuapp.com/countries')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          allCountry: data,
        });
      });
  };

  componentDidMount() {
    this.getData();
    console.log(this.state.allCountry);
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    console.log(item.username);
    return (
      <ListItem
        key={i}
        title={item.country}
        subtitle={
          <View>
            <Text>
              Total Cases : {item.cases}
              <Text> | </Text>
              <Text>New Cases : {item.todayCases}</Text>
            </Text>
            <Text>
              Deaths : {item.deaths}
              <Text> | </Text>
              <Text>Recovered : {item.recovered}</Text>
            </Text>
            <Text>
              Critical : {item.critical}
              <Text> | </Text>
              <Text>Active Cases: {item.active}</Text>
            </Text>
          </View>
        }
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        subtitleStyle={{ fontSize: 10 }}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View>
        <Header title="All Countries" navigation={this.props.navigation} />
        <ScrollView>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allCountry}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}
