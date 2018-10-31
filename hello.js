export default {
  contractName: "MyContract",
  network_id: 3,
  address: '0xed272846b5283cae9970068cc711cd7fa6b37b54',
  abi: [
    {
      constant: true,
      inputs: [],
      name: "myFunction",
      outputs: [
        { name: "myNumber", type: "uint256" },
        { name: "myString", type: "string" }
      ],
      payable: false,
      stateMutability: "pure",
      type: "function"
    }
  ]
};
