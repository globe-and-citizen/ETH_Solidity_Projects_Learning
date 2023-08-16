var GetUser = artifacts.require("./GetUser.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(GetUser);
};
