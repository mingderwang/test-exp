import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import ExpoPixi from 'expo-pixi';

import './global';

const Web3 = require('web3');
const web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io/'),);


export default class App extends React.Component {
  render() {
    web3.eth.getBlock('latest').then(console.log);
    return (
 <View style={styles.container}>
  <Expo.GLView
    style={{ flex: 1 }}
    onContextCreate={async context => {
      const app = ExpoPixi.application({ context });
      const sprite = await ExpoPixi.spriteAsync('http://i.imgur.com/uwrbErh.png');
      app.stage.addChild(sprite);
    }}
  />
 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
