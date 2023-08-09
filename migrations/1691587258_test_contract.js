var TestContract = artifacts.require("./TestContract.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TestContract);
};
