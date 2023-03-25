# Flash Loan w/ AAVE

~ Contract using AAVE Flash loan to allow for arbitrage opportunites
~ Imports from FlashLoanSimpleReceiverBase.sol to call the calls the executeOperation method

## Tech Stack

~Utilizes the Chai assertion library with Mocha for unit tests.

~In this project I used Hardhat for an Ethereum development environment and framework.

~Uses Hardhat Mainnet Forking which can simulate having the same state as mainnet, but it will work as a local development network. 

~The smart contract itself was written in Solidity language utilizing ethers.js which is a library that aims to be a complete and compact library for interacting 
with the Ethereum Blockchain and its ecosystem

### Overview/Notes

Flash loans can be used to borrow large amounts of crypto to take advantage of arbitrage opportunties in DEFI.  The amount must be paid back instantaneously with interest
or the transaction will revert like it never happened, minus a gas fee.
