// ## Solidity / # Dùng truffle / # Chỉnh config truffle

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     
      port: 9545,   
      network_id: "*",       
    },
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.8.10",
    }
  },
};
