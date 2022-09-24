require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url:"https://rpc-mumbai.maticvigil.com",
      accounts:["4dcbb48ec8894b6aac33d230bcb4cd49210f3c616b1b20de32fa119a7dd1c44d"]
    }
  }
};


//SA Contract Address in mumbai : 0x2a4eF2bf2941A61929760df1FCac556Afcbb6885


