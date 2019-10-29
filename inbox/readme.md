node setup (potential)
https://www.freecodecamp.org/news/ethereum-69-how-to-set-up-a-fully-synced-blockchain-node-in-10-mins-f6318d7aad40/



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