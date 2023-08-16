// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

contract GetUser {
    address[16] public adopters;

    function getUsers() public view returns (address[16] memory) {
        return adopters;
    }

    function get(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15, "Invalid petId");
        adopters[petId] = msg.sender;
        return petId;
    }
}
