require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const privateKey = fs.readFileSync(".rinkeby").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    // rinkeby: {
    //   // Infura
    //   url: `https://rinkeby.infura.io/v3/${infuraId}`,
    //   accounts: [privateKey],
    //   chainId: 4
    // },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [process.env.privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

