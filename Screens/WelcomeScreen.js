import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import CoviGuard from '../assets/CoviGuard';
import LoginHeader from '../Components/LoginHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../Config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      confirmPassword: '',
      visibility: false,
      firstName: '',
      lastName: '',
      contactNo: '',
      address: '',
      email: '',
      passcode: '',
    };
  }

  registrationForm = () => {
    return (
      <Modal
        visible={this.state.visibility}
        transparent={true}
        animationType={'fade'}
        style={styles.formContainer}>
        <ScrollView>
          <KeyboardAvoidingView
            style={{ justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={styles.title}> Register Now </Text>
            <TextInput
              placeholder={'  First Name'}
              style={styles.textInputForm}
              maxLength={10}
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
            />

            <TextInput
              placeholder={'  Last Name'}
              style={styles.textInputForm}
              maxLength={10}
              onChangeText={(text) => {
                this.setState({
                  lastName: text,
                });
              }}
            />

            <TextInput
              placeholder={'  Address'}
              style={styles.textInputForm}
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  address: text,
                });
              }}
            />

            <TextInput
              style={styles.textInputForm}
              placeholder={'Contact Number'}
              maxLength={10}
              keyboardType = {"numeric"}
              onChangeText={(text) => {
                this.setState({
                  contactNo: text,
                });
              }}
            />

            <TextInput
              placeholder={'  Email Id'}
              style={styles.textInputForm}
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />

            <TextInput
              placeholder={'  password'}
              style={styles.textInputForm}
              secureTextEntry={true}
              maxLength={10}
              onChangeText={(text) => {
                this.setState({
                  passcode: text,
                });
              }}
            />

            <TextInput
              placeholder={'  confirm password'}
              style={styles.textInputForm}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  confirmPassword: text,
                });
              }}
            />

            <TouchableOpacity
              style={styles.register}
              onPress={() => {
                this.userSignUp(
                  this.state.email,
                  this.state.passcode,
                  this.state.confirmPassword
                );
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                Register
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancel}
              onPress={() => {
                this.setState({
                  visibility: false,
                });
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal>
    );
  };

  userSignUp = async (email, password, confirmpass) => {
    if (password !== confirmpass) {
      return alert('Password Do Not Match');
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('user').add({
            First_Name: this.state.firstName,
            Last_Name: this.state.lastName,
            Address: this.state.address,
            Contact_Number: this.state.contactNo,
            Email_ID: this.state.email,
            RequestedBooks: false,
          });
          return alert('User Registered Successfully', '', [
            {
              text: 'OK',
              onPress: () =>
                this.setState({
                  FormVisible: false,
                }),
            },
          ]);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMsg = error.message;
          return alert(errorMsg);
        });
    }
    this.setState({
      FormVisible: false,
    });
  };

  userLogin = async (emailId, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then((response) => {
        this.props.navigation.navigate("Global")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <View>
        <View>{this.registrationForm()}</View>
        <View>
          <LoginHeader title="CoviGuard" />
        </View>

        <View>
          <TextInput
            placeholder="Email-Id"
            onChangeText={(text) =>
              this.setState({
                emailId: text,
              })
            }
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) =>
              this.setState({
                password: text,
              })
            }
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'wrap' }}>
          <TouchableOpacity
            style={styles.touchable1}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 3,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                modalVisibility: true,
              });
              console.log(this.state.modalVisibility);
            }}
            style={styles.touchable2}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 3,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 35,
    width: 300,
    alignContent : "center",
    marginTop: 10,
    alignSelf : 'center',
  },
  touchable1: {
    backgroundColor: '#f4d160',
    borderWidth: 2,
    width: 100,
    height: 40,
    marginTop: 10,
    alignSelf: 'center',
    marginLeft: -150,
    borderRadius: 10,
  },
  touchable2: {
    backgroundColor: '#f4d160',
    borderWidth: 2,
    width: 100,
    height: 40,
    alignSelf: 'center',
    marginTop: -40,
    marginLeft: 150,
    borderRadius: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    width: 250,
    alignSelf: 'center',
    borderWidth: 2,
  },
  textInputForm: {
    borderWidth: 1,
    height: 35,
    width: 200,
    alignSelf: 'left',
    marginTop: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  register: {
    backgroundColor: '#2089dc',
    borderWidth: 2,
    width: 80,
    height: 35,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: -100,
  },
  cancel: {
    backgroundColor: '#2089dc',
    borderWidth: 2,
    width: 80,
    height: 35,
    alignSelf: 'center',
    marginTop: -45,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 100,
  },
});
