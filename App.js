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
      amount: "0",
      his_amount: "0",
      symbol: "",
      result: "<< waiting for confirm... >>"
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
    var contract = TruffleContract(abi);
    contract.setProvider(hd);
    //contract_address = "0xed272846b5283cae9970068cc711cd7fa6b37b54";
    contract_address = "0x283566C6B764679efa6772970FF1128446Fe49CC";
    //contract_address = "0xe8af929b1365c06946cf50db3e6dd5599ac33baf";
    /*
    let ins = await contract.at(contract_address);
    let res = await ins.symbol();
    this.setState({
      symbol: res
    })
    */
    contract
      .at(contract_address)
      .then(function(instance) {
        coin = instance;
        res = coin.symbol();
        return res;
      })
      .then(
        function(res) {
          this.setState({ symbol: res.toString() });
        }.bind(this)
      )
      .then(
        function() {
          res = coin.balanceOf(this.state.account);
          return res;
        }.bind(this)
      )
      .then(
        function(res) {
          this.setState({ amount: res.toString() });
        }.bind(this)
      )
      .then(
        function() {
          res = coin.transfer(
            "0x66Ee73086134f147745BE72335153Bf780499E2e",
            5000000000000000000,
            { from: this.state.account }
          );
          return res;
        }.bind(this)
      )
      .then(
        function(result) {
          // If this callback is called, the transaction was successfully processed.
          console.log(result);

          this.setState({ result: "transfer sent" });
        }.bind(this)
      )
      .then(function() {
        res = coin.balanceOf("0x66Ee73086134f147745BE72335153Bf780499E2e");
        return res;
      })
      .then(
        function(res) {
          this.setState({ his_amount: res.toString() });
        }.bind(this)
      )
      .catch(
        function(err) {
          // Easily catch all errors along the whole execution.
          console.log("ERROR! " + err.message);
          this.setState({ result: "ERROR! " + err.message });
        }.bind(this)
      );
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
          <Text> My Total Amount : </Text>
          <Text color="#ffffff">{this.state.amount}</Text>
          <Text>
            {" "}
            transfer 5 tokens to 0x66Ee73086134f147745BE72335153Bf780499E2e:{" "}
          </Text>
          <Text color="#ffffff">{this.state.result}</Text>
          <Text> His Total Amount : </Text>
          <Text color="#ffffff">{this.state.his_amount}</Text>
        </View>
      </View>
    );
  }
}
