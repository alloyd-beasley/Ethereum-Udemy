node setup (potential)
https://www.freecodecamp.org/news/ethereum-69-how-to-set-up-a-fully-synced-blockchain-node-in-10-mins-f6318d7aad40/
OR USE MASTERING ETHEREUM


Solidity value types:
    string - solidity stores strings as dynamic arrays.
    bool
    int - possitive or negative
    uint - unsigned integer, positive number, no decimal.
    fixed/ufixed - fixed point number, number with a decimal after it.
    address - has methods tied to it for sending money. addr class.

Solidity reference types:
    fixed array: int[2] = [1, 2];
    dynamic array: int[] = [1, 2, 3, 4];
        cannot move arrays of strings over to the javascript world
        can store them, but they will not translate

    mapping: collection of key value pairs. all keys and values must be of the same type
        mapping(string => string)

    struct: colelciton of key value paires that can have different types
        struct Car {
            string make;
            string model;
            uint value;
        }


Solidity function types:
    public, private
    view: this funciton returns data and des not modify the contracts data
    constant: this funciton returns data and does not modify the contracts data
    pure: funciton will not modify or even read the contracts data
    payable: when someone calls this funciton they might send either along.

Project_1 Overview:

Wrote a .sol contract that accepts a string as a message, and then displays that message when called.
Wrote a compile script that uses the solidity compiler to read the contents of our new Inbox Contract.

 Setup a test file to test our contract.
 - made use of web3, module that gives us access to the ethereum network.
 - web3 makes use of a 'provider' that instructs web3 about which specific network it is connection to, and provides web3 with info like accounts.
    - used ganache-cli for this.
    - ganache hosts a local test network, and generates some number of accounts.

Interface - abi, translation layer that communicates data from the network, back to the javascript world.
Bytecode - compiled contract.



