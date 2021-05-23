import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
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

export default class Vaccines extends React.Component {
  render() {
    return (
      <ScrollView>
          <View>
            <Header title="Vaccines" navigation={this.props.navigation} />
            
          </View>
      </ScrollView>
    );
  }
}
