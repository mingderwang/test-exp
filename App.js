import React from "react";
import {
  Text,
  View
} from "react-native";
import "./global";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "waiting for data"
    };
  }
  componentWillMount() {
    const Web3 = require("web3");
    web3 = new Web3(
      new Web3.providers.HttpProvider("https://mainnet.infura.io/")
    );
    web3.eth.getBlockNumber().then(blockNumber => {
      this.setState({
        titleText: blockNumber
      });
    });
   // var HDWalletProvider = require("truffle-hdwallet-provider");
  }
  render() {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#44bb44"
          }}
        >
          <View>
            <Text> BlockNumber: </Text>
            <Text color="#ffffff">{this.state.titleText}</Text>
          </View>
        </View>
      );
  }
}
