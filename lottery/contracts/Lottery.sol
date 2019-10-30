pragma solidity >=0.4.17;
//manager
//players

//enter func
//pick winner


contract LotteryContract {

    //address of the person who has created the contract
    address public manager;

    //players of the lottery
    address[] public players;

    constructor() public {
        //access msg global to pull initial address
        manager = msg.sender;
    }

    //call this function to enter the lottery
    //make it payable because the player may send ether along
    function enter() public payable{
        
        //add player to the players array, taken from message global
        players.push(msg.sender);
    }
}