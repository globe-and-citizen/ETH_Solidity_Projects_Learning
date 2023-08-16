var GetUser = artifacts.require("GetUser");

contract("GetUser", function (accounts) {
  it("should return the users", function () {
    return GetUser.deployed().then(function (instance) {
      return instance.getUsers.call();
    });
  });
  it("should get the user by id", function () {
    return GetUser.deployed().then(function (instance) {
      return instance.getById.call(1);
    });
  });
});
