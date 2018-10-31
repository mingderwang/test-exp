export default {
    contractName: "MessageContract",
    network_id: 3,
    address: '0xe8af929b1365c06946cf50db3e6dd5599ac33baf',
    abi:
  [
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMessage",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
};