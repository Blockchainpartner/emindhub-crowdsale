require('babel-register');
require('babel-polyfill');

var provider;
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = '[REDACTED]';

if (!process.env.SOLIDITY_COVERAGE){
  provider = new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/')
}


module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 8000000,
      gasPrice: 1
    },
    ropsten: {
      provider: provider,
      network_id: 3 // official id of the ropsten network
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    }
  }
};
