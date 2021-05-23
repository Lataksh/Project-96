import React from 'react';
import LottieView from 'lottie-react-native';

export default class CoviGuard extends React.Component {
  render() {
    return (
      <LottieView
        source={require('./61039-covid-elimination.json')}
        style={{
          width: 350,
          height: 350,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop : 20,
          marginBottom : 10
        }}
        autoPlay
        loop
      />
    );
  }
}
