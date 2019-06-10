const assert = require('assert');
const ganache = require('ganache-cli');
const { interface, bytecode } = require('../compile');

//web3 constructor
const Web3 = require('web3');

//creates an instance of web3 and tells it to connect to the local test network.
const web3 = new Web3(ganache.provider()); 



let accounts: string[];
let inbox: any;


beforeEach(async() => {
    //Get a list of all accounts.
    accounts = await web3.eth.getAccounts();
       
    //Use one of those accounts to deploy the contract.
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['lok tar']})
        .send({from: accounts[0], gas: '1000000'});        
});

describe('InboxContract', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    })
});