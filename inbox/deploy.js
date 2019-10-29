const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const { MNEUMONIC_PHRASE, INFURA_KEY } = require('./Util.js');


const provider = new HDWalletProvider(MNEUMONIC_PHRASE, INFURA_KEY);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(`deploying from account ${accounts[0]}`)

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode, arguments: ['this is the first argument'] })
        .send({ from: accounts[0] });

    console.log(`contract deployed to ${result.options.address}`);
};

deploy();