import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar } from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

export default class SideDrawer extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              backgroundColor: '#2089dc',
              marginTop : 30,
            }}>
            CoviGuard
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
        </View>
        <View>
          <DrawerItems {...this.props} />
        </View>
      </View>
    );
  }
}
