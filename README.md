# Solidity & Ethereum Learning

## Requirements

- [Node.js](https://nodejs.org/en/) v8.9.4 or higher
- [npm](https://www.npmjs.com/) v5.6.0 or higher
- [Truffle](https://truffleframework.com/) v4.1.14 (core: 4.1.14)
- [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) v0.4.24 (solc-js)
- [Ganache GUI](https://trufflesuite.com/ganache/) v6.1.8 (ganache-core: 2.2.1)

## Testing

- Start Ganache GUI and run `truffle deploy` to test the deployment of the smart contracts.
  _Note: You can also configure `truffle-config.js` according to the Ganache GUI settings._

## Usage

- Run `truffle compile` to compile the smart contracts.
- Run `truffle migrate` or `truffle deploy` to deploy the smart contracts.
- Run `truffle create migration <migration_name>` to create a new migration file.
- Run `truffle create contract <contract_name>` to create a new contract file.
- Run `truffle test` to run the tests.
