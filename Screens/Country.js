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
} from 'react-native';
import CoviGuard from '../assets/CoviGuard';
import Header from '../Components/Headers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../Config';
import firebase from 'firebase';

export default class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataLoded: false,
      countryName: '',
      countryGiven: false,
    };
  }

  getDataFromApi = async () => {
    var localData = [];
    return fetch(
      'https://coronavirus-19-api.herokuapp.com/countries/' +
        this.state.countryName
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          dataLoded: true,
        });
      });
  };

  checkForEmpty = () => {
    {
      this.state.countryName === ''
        ? this.setState({
            countryGiven: false,
            data: [],
          })
        : console.log('Country Given');
    }
  };

  componentWillUpdate = () => {
    this.checkForEmpty();
  } 

  render() {
    return (
      <View>
        <Header title="Country Senario" navigation={this.props.navigation} />
        <TextInput
          style={styles.textInput}
          placeholder={'  Country Name Here'}
          onChangeText={(text) => {
            this.setState({
              countryName: text,
            });
          }}
        />
        <TouchableOpacity
          style={styles.touchable1}
          onPress={() => {
            if (this.state.countryGiven !== true) {
              this.getDataFromApi();
              this.setState({
                countryGiven: true,
              });
            }
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 3,
            }}>
            Search
          </Text>
        </TouchableOpacity>
        {this.state.countryName === '' ? (
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 50,
            }}>
            Please Give The Country Name and click on Search Button
          </Text>
        ) : (
          <View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Total Cases :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#5a5858',
                  }}>
                  {this.state.data.cases}
                </Text>
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Deaths :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#ff0000',
                  }}>
                  {this.state.data.deaths}
                </Text>
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Recovered :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#03cc00',
                  }}>
                  {this.state.data.recovered}
                </Text>
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                New Cases :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#03cc00',
                  }}>
                  {this.state.data.todayCases}
                </Text>
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Critical :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#03cc00',
                  }}>
                  {this.state.data.critical}
                </Text>
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Total Test :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#03cc00',
                  }}>
                  {this.state.data.totalTests}
                </Text>
              </Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              -------------------------------------------
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Active Cases :-
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#03cc00',
                  }}>
                  {this.state.data.active}
                </Text>
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

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    height: 35,
    width: 320,
    alignSelf: 'center',
    marginTop: 10,
  },
  touchable1: {
    backgroundColor: '#f4d160',
    borderWidth: 2,
    width: 200,
    height: 30,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
