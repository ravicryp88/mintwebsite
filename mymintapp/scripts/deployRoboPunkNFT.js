
const hre = require("hardhat");

async function main() {
  
  const RoboPunkNFT = await hre.ethers.getContractFactory("RoboPunkNFT");
  const roboPunkNFT = await RoboPunkNFT.deploy();

  await roboPunkNFT.deployed();

  console.log("RoboPunkNFT deployed to:", roboPunkNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
