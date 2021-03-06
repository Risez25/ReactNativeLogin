/* @flow */

import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticate';
import {connect} from 'react-redux';

import * as COLOR from '../config/colors';


class Home extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Home",
    headerTintColor: COLOR.HEADER_TINT,
    headerStyle: {
      backgroundColor: COLOR.HEADER
    },
    headerRight: <TouchableOpacity style={{
        margin: 8
      }} onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={21} color={COLOR.ICON} />
      </TouchableOpacity>
  });

  render() {
    return (
      <View style={{
        flex: 1,
        padding: 8,
        backgroundColor: COLOR.BACKGROUND
      }}>
        <StatusBar backgroundColor={COLOR.STATUS_BAR} barStyle='light-content'/>
        <Text>
          This is the Home component. You can add your main functions here.
        </Text>
      </View>
    );
  }
}

export default Home;
