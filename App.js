import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './global';

const Web3 = require('web3');
const web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io/'),);


export default class App extends React.Component {
  render() {
    web3.eth.getBlock('latest').then(console.log);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
