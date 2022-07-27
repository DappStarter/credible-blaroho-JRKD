require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain eternal gesture nature sure teach'; 
let testAccounts = [
"0xa10e3405cf642ed0ce5974e9e385639b2b67e4d3cc53363251a6be9b2cb6e36f",
"0x8ddd4c84fd777606d85132d4d0f034ec92110aa9de75fbb9feaa0ece04c21c81",
"0x87dfc3dc704a0b810d828c2a3e7f06e9c0d2feb9c48aa8f8a84b9469c9e62fc0",
"0x52fcbb198a09d0aaeb9da37d9d55b20ae5335415b9ca77909150733f7656fae4",
"0x8a05c4713ff8acbc13abd7847e81fe2f17f00ba7bb6f31812bed553c1f714512",
"0x5a598af9b7e9b9d0cc6bb713f72d0db04826cb18fda3198a5cf9aef3a68edc7a",
"0x56ea4e5d5189c8117b40af0abce9e4b96fedc4510f5697ff1132d0e62c6e17e8",
"0xda479dc6c4f61d7c9451fe10ca734c406773b270d8e2d9c752f0dd902b454c54",
"0x0b99c7f6a4b62e7dfacba6eedc7ac1048061440a6dcdc3243e594576f57aeefa",
"0x36d99c174dab54fc6b121db8cf1f98770909695255d97e3c3e6c9fc6b73683e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

