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

export default class AwesomeProject extends Component {
  render() {

    var TouchableElement = TouchableHighlight
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Click the button bellow ！
        </Text>
        <TouchableElement>
          <View>
            <Text>Magic !</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
