const { getContractFactory } = require('hardhat-deploy-ethers/types');

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const BOTANIX = 0;
  const SEPOLIA = 10161;
  const ARBITRUM = 10231;

  const contractAddressBotanix = '0xC46713BB038e031Fb2B28516BF9181C520d29f35';
  const CONTACT_BOTANIX = await ethers.getContractAt(
    'BotanixLz',
    contractAddressBotanix
  );

  const contractAddressArbiSep = '0xC46713BB038e031Fb2B28516BF9181C520d29f35';
  const CONTRACT_ARBITRUM = await ethers.getContractAt(
    'BotanixLz',
    contractAddressArbiSep
  );

  const contractAddressSepolia = '0xAec4e59a2322adf6D5c3B7A21bda3779c0878399';
  const CONTRACT_SEPOLIA = await ethers.getContractAt(
    'BotanixLz',
    contractAddressSepolia
  );

  //SET TRUSTED REMOTE ADDRESS

  //Botanix
  // const txB = await CONTRACT_BOTANIX.setTrustedRemoteAddress(BOTANIX, contractAddressBotanix, {
  //     // gasLimit: 10000000,
  //     // gasPrice: gasPriceValue,
  // })
  // await txM.wait(1)

  //Arbitrum
  //   const txA = await CONTRACT_ARBITRUM.setTrustedRemoteAddress(
  //     ARBS,
  //     contractAddressArbiSep,
  //     {
  //       // gasLimit: 10000000,
  //       // gasPrice: gasPriceValue,
  //     }
  //   );
  //   await txM.wait(1);

  //Sepolia
  // const txS = await CONTRACT.setTrustedRemoteAddress(SEPOLIA, contractAddressSepolia, {
  //     // gasLimit: 10000000,
  //     // gasPrice: gasPriceValue,
  // })
  // await txM.wait(1)

  const getTrustedAddr = await estimateFee.getTrustedRemoteAddress();
  console.log('TrustedRemoteAddr:', getTrustedAddr);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
