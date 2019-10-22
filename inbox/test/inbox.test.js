const assert = require('assert');
const ganache = require('ganache-cli');
const { interface, bytecode } = require('../compile');

//web3 constructor
const Web3 = require('web3');

//creates an instance of web3 and tells it to connect to the local test network.
const provider = ganache.provider();
const web3 = new Web3(provider);

const INITIAL_VARIABLE = 'lok tar'


let accounts;
let inbox;


beforeEach(async () => {
    //Get a list of all accounts.
    accounts = await web3.eth.getAccounts();
       
    //Use one of those accounts to deploy the contract.
    inbox = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({data: bytecode, arguments: ['lok tar']})
            .send({from: accounts[0], gas: '1000000'});        

    inbox.setProvider(provider);
});

describe('InboxContract', () => {
    it('deploys a contract', () => {                
        //if an address exists, we can be confident that the contract was deployed. 
        //test will pass with an truthy value
        assert.ok(inbox.options.address);
    })

    it('has a default message', async() => {
        const message = await inbox.methods.message().call(); 
                
        assert.equal(message, INITIAL_VARIABLE);
    })

    it('can change the message', async()=> {
        const NEW_MESSAGE = 'this is the new initial mesage';

        await inbox.methods.setMessage(NEW_MESSAGE).send({from: accounts[0], gas: '1000000'});
        const message = await inbox.methods.message().call();

        assert.equal(message, NEW_MESSAGE);
    })
});