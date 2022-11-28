require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong deny snow punch gentle light army gate'; 
let testAccounts = [
"0x51e6412405e22f46dea13d9fd16bf744a8e5ef13c41eec445a9cb53cab3bf012",
"0x525bbfc149ac49a1573f92950f4f6cfb4d37c7d312fee911bf846f985a8e5675",
"0x9dce1e81cf88a54371583aeae23522c425e8a468633f7308c2bf3666e61c3b8f",
"0xf4c516f02f2b01b94a4c9fd60e6f63f8ac881bdb3c9073c20678e7f8eda796fb",
"0x0198a07bbd642eb90622dbd93dba9a2352894fede91dc05635c1bbe55ff0676a",
"0x3735bb8532da8db166facf11683e118bd89376bd3165eb5ec001b850d91030d9",
"0x83b7fd133b59a8cea962e2190ab18f8ef91b34236354b5455d01202ba0b7592c",
"0x623f1c39d5ffa189c34197e8c5e82c830cf65acc87a39056912a5b18ceb78a61",
"0x9f6c1fe1c84f4ab69742df68635953a78d30a395dfe168e14ee9b7fa00159c8e",
"0x9e5c9e5ad1911a49906322e8c2e579bd49b97690ab03f971dd8c9fa6801e5f64"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

