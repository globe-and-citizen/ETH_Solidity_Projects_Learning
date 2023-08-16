// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

contract GetUser {
    address[16] public users;

    function getUsers() public view returns (address[16] memory) {
        return users;
    }

    function getById(uint id) public view returns (address) {
        return users[id];
    }
}
