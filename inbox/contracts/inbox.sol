//specify version number
pragma solidity ^0.4.17;

//delcare contract definition
//contract keyword can be seen as defining a class
contract InboxContract {
    
    //declare instance (storage) variable
    //will exist for the life of the contract
    //automatically stored with the contract on the blockchain
        //setting instance variables to public will automatically create a getter function for that variable. 
    string public message;
    
    //because this function has the same name as the contract, this function can be thought of as the constructor function of our contract.
    //automatically called one time when the contract is first created.
    //invoked automatically when we deploy our contract to the BC. 
    function Inbox(string initialMessage) public {
        message = initialMessage;    
    }
    
    
    //call these function on the contract.
    //methods
    
    
    function setMessage(string newMessage) public {
        //modifying variable message
        //changes contract data
        message = newMessage;
    } 
    
    //function name, args, function type, return type
    //view/constant, returns data and does not modify contract data.
    /*function getMessage() public view returns (string) {
        //not trytig to modify contract data in any way. 
        return message;
    }*/
    
    //public, anyone can call this function. Not used to specify security
    //private, only our contracts code can call this function.
    //view/constant, returns data and does not modify contract data. 
    //pure, function will not modify or even access contract data. 
        //data access serves as a side effect
    //payable, someone calls this contract and sends money at the same time. 
    
}