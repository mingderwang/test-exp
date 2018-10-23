import React from "react";
const Promise = require("bluebird");
import { Text, View } from "react-native";
import "./global";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "waiting for data",
      account: "creating...",
      amount: 0,
      symbol: ""
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
    var myContract = new web3.eth.Contract(
      [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_amount",
              type: "uint256"
            }
          ],
          name: "assign",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address[]"
            },
            {
              name: "_amount",
              type: "uint256[]"
            }
          ],
          name: "assignInBatches",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address"
            },
            {
              name: "_subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseApproval",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address"
            },
            {
              name: "_addedValue",
              type: "uint256"
            }
          ],
          name: "increaseApproval",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_address",
              type: "address"
            }
          ],
          name: "lockAddress",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_addresses",
              type: "address[]"
            }
          ],
          name: "lockInBatches",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address[]"
            },
            {
              name: "_amount",
              type: "uint256[]"
            }
          ],
          name: "mintInBatches",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [],
          name: "tokenSaleEnd",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [],
          name: "tokenSaleStart",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_newAssigner",
              type: "address"
            }
          ],
          name: "transferAssigner",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_from",
              type: "address"
            },
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "addr",
              type: "address"
            }
          ],
          name: "Lock",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "tokenSaleId",
              type: "uint256"
            }
          ],
          name: "TokenSaleEnding",
          type: "event"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_newLocker",
              type: "address"
            }
          ],
          name: "transferLocker",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "tokenSaleId",
              type: "uint256"
            }
          ],
          name: "TokenSaleStarting",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "previousLocker",
              type: "address"
            },
            {
              indexed: true,
              name: "newLocker",
              type: "address"
            }
          ],
          name: "LockerTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              name: "amount",
              type: "uint256"
            }
          ],
          name: "Mint",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              name: "amount",
              type: "uint256"
            }
          ],
          name: "Assign",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "previousAssigner",
              type: "address"
            },
            {
              indexed: true,
              name: "newAssigner",
              type: "address"
            }
          ],
          name: "AssignerTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "addr",
              type: "address"
            }
          ],
          name: "Unlock",
          type: "event"
        },
        {
          constant: false,
          inputs: [
            {
              name: "newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_address",
              type: "address"
            }
          ],
          name: "unlockAddress",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              name: "_assigner",
              type: "address"
            },
            {
              name: "_locker",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_addresses",
              type: "address[]"
            }
          ],
          name: "unlockInBatches",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address"
            },
            {
              name: "_spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "assigner",
          outputs: [
            {
              name: "",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "currentTokenSaleId",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "_address",
              type: "address"
            }
          ],
          name: "getAddressTokenSaleId",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "getCurrentTokenSaleId",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "_address",
              type: "address"
            }
          ],
          name: "isLocked",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "isTokenSaleOngoing",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address"
            }
          ],
          name: "locked",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "locker",
          outputs: [
            {
              name: "",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "MAX_BATCH_SIZE",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "MAX_TOKEN_SALES",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "MAX_TOKEN_SUPPLY",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              name: "",
              type: "string"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [
            {
              name: "",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              name: "",
              type: "string"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "TOKEN_UNIT",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address"
            }
          ],
          name: "tokenSaleId",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "tokenSaleOngoing",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        }
      ],
      "0x1709aa5af3d7555908248af003e61bafadb10202",
      {
        from: accounts[0], // default from address
        gasPrice: "20000000000" // default gas price in wei, 20 gwei in this case
      }
    );
    myContract.methods
        .totalSupply()
        .call()
        .then(amount =>
          this.setState({
            amount: amount
          })
        );
      myContract.methods
        .symbol()
        .call()
        .then(symbol =>
          this.setState({
            symbol: symbol
          })
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
          <Text> Total Supply: </Text>
          <Text color="#ffffff">{this.state.amount}</Text>
        </View>
      </View>
    );
  }
}
