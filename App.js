import React from "react";
const Promise = require("bluebird");
import { Text, View } from "react-native";
import "./global";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "waiting for data",
      account: "creating..."
    };
  }
  async componentWillMount() {
    var HDWalletProvider = require("truffle-hdwallet-provider");
    var mnemonic =
      "manage velvet tide tube object spin identify neither foot together wagon tip";
    var hd = new HDWalletProvider(mnemonic, "https://mainnet.infura.io/");
    web3 = new Web3(hd);
    Promise.promisifyAll(web3.eth);
    let accounts = await web3.eth.getAccountsAsync();
    this.setState({
      account: accounts[0]
    });
    let blockNumber = await web3.eth.getBlockNumberAsync();
    this.setState({
      titleText: blockNumber
    });
    console.log(blockNumber)
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
          <Text> NewAccount: </Text>
          <Text color="#ffffff">{this.state.account}</Text>
        </View>
      </View>
    );
  }
}
