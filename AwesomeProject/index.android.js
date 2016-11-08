/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

import MyToastAndroid from './src/modules/MyToastAndroid.js'

export default class AwesomeProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      flag: true
    }
  }

  handleClick () {
    this.setState({flag: !this.state.flag})
    MyToastAndroid.show('State changed !', MyToastAndroid.SHORT)
  }
  render() {

    var TouchableElement = TouchableHighlight
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback
    }

    return (
      <View style={styles.container}>
        <Text style={styles.intro}>
          Click the button bellow ！
        </Text>
        <TouchableElement onPress={e => this.handleClick()}>
          <View >
            <Text style={styles.button}>{this.state.flag ? 'ON': 'OFF'}</Text>
          </View>
        </TouchableElement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  intro: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    padding: 20,
    backgroundColor: '#eee',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
