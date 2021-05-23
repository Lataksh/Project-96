import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import CoviGuard from '../assets/CoviGuard';
import Header from '../Components/Headers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../Config';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';

export default class FAQ extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Header title="FAQ's" navigation={this.props.navigation} />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: 'yellow',
            width: 250,
            alignSelf: 'center',
            textAlign: 'center',
            borderWidth: 2,
            borderStyle: 'dotted',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Basic Questions
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10,
            fontFamily: 'monospace',
            marginBottom: 10,
          }}>
          <Icon name="head-question" type="material-community" />
          What is COVID-19
        </Text>
        <Text
          style={{
            marginLeft: 10,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            marginBottom: 10,
            textAlign: 'justify',
            marginRight: 15,
          }}>
          COVID-19 is a new disease, caused by a novel (or new) coronavirus that
          has not previously been seen in humans. Because it is a new virus,
          scientists are learning more each day. Although most people who have
          COVID-19 have mild symptoms, COVID-19 can also cause severe illness
          and even death. Some groups, including older adults and people who
          have certain underlying medical conditions, are at increased risk of
          severe illness.
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10,
            fontFamily: 'monospace',
            marginBottom: 10,
          }}>
          <Icon name="head-question" type="material-community" />
          Why is the disease being called coronavirus disease 2019, COVID-19?
        </Text>
        <Text
          style={{
            marginLeft: 10,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            marginBottom: 10,
            textAlign: 'justify',
            marginRight: 15,
          }}>
          On February 11, 2020 the World Health Organization announced an
          official name for the disease that is causing the 2019 novel
          coronavirus outbreak, first identified in Wuhan China. The new name of
          this disease is coronavirus disease 2019, abbreviated as COVID-19. In
          COVID-19, “CO” stands for corona, “VI” for virus, and ”D” for disease.
          Formerly, this disease was referred to as “2019 novel coronavirus” or
          “2019-nCoV.”
        </Text>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: 'yellow',
            width: 110,
            alignSelf: 'center',
            textAlign: 'center',
            borderWidth: 2,
            borderStyle: 'dotted',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Spread
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            fontFamily: 'monospace',
            marginBottom: 10,
          }}>
          <Icon name="head-question" type="material-community" />
          How does the virus Spread
        </Text>
        <Text
          style={{
            marginLeft: 10,
            flexWrap: 'wrap',
            textAlign: 'justify',
            marginRight: 15,
            fontFamily: 'monospace',
            marginBottom: 10,
          }}>
          COVID-19 is thought to spread mainly through close contact from person
          to person, including between people who are physically near each other
          (within about 6 feet). People who are infected but do not show
          symptoms can also spread the virus to others. Cases of reinfection
          with COVID-19 have been reported but are rare. We are still learning
          about how the virus spreads and the severity of illness it causes.
          COVID-19 spreads very easily from person to person. How easily a virus
          spreads from person to person can vary. The virus that causes COVID-19
          appears to spread more efficiently than influenza but not as
          efficiently as measles, which is among the most contagious viruses
          known to affect people. For more information about how COVID-19
          spreads, visit the How COVID-19 Spreads page to learn how COVID-19
          spreads and how to protect yourself.
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: 'monospace',
          }}>
          <Icon name="head-question" type="material-community" />
          Can mosquitoes or ticks spread the virus that causes COVID-19?
        </Text>
        <Text
          style={{
            marginLeft: 10,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            marginBottom: 10,
            textAlign: 'justify',
            marginRight: 15,
          }}>
          At this time, CDC has no data to suggest that this new coronavirus or
          other similar coronaviruses are spread by mosquitoes or ticks. The
          main way that COVID-19 spreads is from person to person. See How
          Coronavirus Spreads for more information.
        </Text>
      </ScrollView>
    );
  }
}
