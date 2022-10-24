pragma solidity 0.8.17;

contract Helloworld2{

    string public message;

    constructor(string memory _message){
        message = _message;
    }
}