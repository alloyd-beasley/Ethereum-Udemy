pragma solidity >=0.4.17;
//manager
//players

//enter func
//pick winner

// nice to have
    //manager cannott also play the lotter
    //make the player liste private


//NEED TO WRITE TESTS


contract LotteryContract {

    //address of the person who has created the contract
    address public manager;

    //players of the lottery
    address[] public players;

    constructor() public {
        //access msg global to pull initial address
        manager = msg.sender;
    }

    function random() private view returns (uint){

        //ahve to convert value to bytes before we can pass it to kek

        bytes memory rando = abi.encodePacked(
            block.difficulty,
            block.timestamp,
            players
        );

        //COURSE NOTE:
            //using sha3 is deprecated, forced to send kek a singly value in bytes
            //had to encode above
        return uint(keccak256(rando));
    }

    function pickWinner() public {

        //pick the winner
        uint index = random() % players.length;

        //send the balance of the current contract
        
        players[index].transfer(address(this).balance);
    }

    //call this function to enter the lottery
    //make it payable because the player may send ether along
    function enter() public payable{
        uint entry = .01 ether;
        require(msg.value > entry, "not enough ether was sent to enter the lotto");


        //add player to the players array, taken from message global
        players.push(msg.sender);
    }
}