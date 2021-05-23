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
} from 'react-native';
import CoviGuard from '../assets/CoviGuard';
import Header from '../Components/Headers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../Config';
import firebase from 'firebase';

export default class Global extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataLoded: false,
    };
  }

  getDataFromApi = async () => {
    var localData = [];
    return fetch('https://coronavirus-19-api.herokuapp.com/all')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          dataLoded: true,
        });
      });
  };

  componentDidMount() {
    this.getDataFromApi();
        console.log(window.innerHeight)

  }

  render() {
    return (
      <View>
        <Header title="Global Scenario" navigation={this.props.navigation} />

        <View>
          <Text
            style={{
              color: 'Black',
              fontSize: 30,
              borderWidth: 3,
              width: 320,
              alignSelf: 'center',
              backgroundColor: '#cccccc',
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            {' '}
            Global Covid Senario
          </Text>
        </View>
        {this.state.dataLoded === false ? (
          <Text style = {{fontSize : 50, fontWeight : 'bold', alignSelf : 'center', marginTop : 200}}> Data Loding </Text>
        ) : (
          <View>
            <View>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Total Cases
              </Text>

              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#5a5858',
                }}>
                {this.state.data.cases}
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Total Deaths
              </Text>

              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#ff0000',
                }}>
                {this.state.data.deaths}
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Total Recovered
              </Text>

              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#03cc00',
                }}>
                {this.state.data.recovered}
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
          </View>
        )}
      </View>
    );
  }
}
