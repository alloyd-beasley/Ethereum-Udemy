const assert = require('assert');
const ganache = require('ganache-cli');

//web3 constructor
const Web3 = require('web3');

//creates an instance of web3 and tells it to connect to the local test network.
const web3 = new Web3(ganache.provider()); 

beforeEach(() => {
    //Get a list of all accounts.
    web3.eth.getAccounts()
        .then((fetchedAccounts)=> {
            console.log(fetchedAccounts, 'fetched accounts')
        })
    
    

    //Use one of those accounts to deploy the contract.
});

describe('InboxContract', () => {
    
    it('deploys a contract', () => {
        console.log('deploys')
    })
    
});