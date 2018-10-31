import React from "react";
const Promise = require("bluebird");
import { Text, View } from "react-native";
import "./global";
import abi from "./abi";
import hello from "./hello";
import message from "./message";
import Web3 from "web3";
import TruffleContract from "truffle-contract";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "waiting for data",
      account: "creating...",
      balance: "0",
      amount: 0,
      symbol: "",
      result: "from function call"
    };
  }
  async componentWillMount() {
    var HDWalletProvider = require("truffle-hdwallet-provider");
    var mnemonic =
      "manage velvet tide tube object spin identify neither foot together wagon tip";
    var hd = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/");
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
    var contract = TruffleContract(message);
    contract.setProvider(hd);
    //contract_address = "0xed272846b5283cae9970068cc711cd7fa6b37b54";
    contract_address = "0xe8af929b1365c06946cf50db3e6dd5599ac33baf";
    let ins = await contract.at(contract_address);
    let res = await ins.getMessage();
    this.setState({
      result: res
    })
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
          <Text> Token Symbol: </Text>
          <Text color="#ffffff">{this.state.symbol}</Text>
          <Text> Total Supply: </Text>
          <Text color="#ffffff">{this.state.amount}</Text>
          <Text> function call: </Text>
          <Text color="#ffffff">{this.state.result}</Text>
        </View>
      </View>
    );
  }
}
