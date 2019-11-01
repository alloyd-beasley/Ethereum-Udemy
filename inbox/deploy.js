const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const { config } = require('../config');



//unlock an account on and connect to Rinkeby via infura.
const provider = new HDWalletProvider(config.MNEUMONIC_PHRASE, config.INFURA_KEY);

//pass web3 our provider with connection for infura node
const web3 = new Web3(provider);

const deploy = async () => {

    //get available accounts from web3
    const accounts = await web3.eth.getAccounts();
    console.log(`deploying from account ${accounts[0]}`)

    //
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode, arguments: ['this is the first argument'] })
        .send({ from: accounts[0] });

    console.log(`contract deployed to ${result.options.address}`);
};

deploy();