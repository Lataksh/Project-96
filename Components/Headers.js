import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';

export default class Headers extends React.Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: this.props.title,
          style: {
            fontSize: 20,
            fontWeight: 'bold',
            width: 250,
            textAlign: 'center',
            color: 'black',
          },
        }}
        leftComponent={
          <Icon name = "menu" type = "feather" onPress = {()=>{this.props.navigation.toggleDrawer()}}/>
          }
        rightComponent = {
          <Icon name = "home" type = "feather" onPress = {()=>{this.props.navigation.navigate("Global")}}/>
        }
      />
    );
  }
}
