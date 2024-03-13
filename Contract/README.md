# Smart Contract Deployment

## Introduction

This folder contains a smart contract for managing non-fungible tokens (NFTs) with LayerZero integration. It provides functionalities for creating NFTs, listing them on a marketplace, transferring them across LayerZero chains, and more.

## Dependencies

### Development Dependencies

- `@nomicfoundation/hardhat-toolbox`: Provides additional tools and utilities for the Hardhat development environment.
- `ethers`: JavaScript library for interacting with the Ethereum blockchain and smart contracts.
- `hardhat`: Ethereum development framework for building, testing, and deploying smart contracts.

### Dependencies

- `@layerzerolabs/solidity-examples`: Collection of Solidity smart contract examples and utilities developed by LayerZero Labs.
- `@openzeppelin/contracts`: Library of secure and community-audited smart contracts for the Ethereum blockchain.
- `dotenv`: Allows loading environment variables from a `.env` file into `process.env`.

## Network Configurations

- Botanix Network

- **URL:** `https://node.botanixlabs.dev`
- **Chain ID:** `3636`
- **Accounts:** The private key specified in the environment variable `PRIVATE_KEY`
- **Deployment Configuration:**
  - **Name:** LZBOTANIX
  - **Symbol:** LZBT
  - **Minimum Gas to Transfer:** Placeholder (Refer to LayerZero documentation for actual value)
  - **LZ Endpoint Address:** Placeholder (Refer to LayerZero documentation for actual address)
  - **Chain ID:** 3636

This network configuration is set up for interacting with the Botanix network. Please refer to the LayerZero documentation for the actual values of "Minimum Gas to Transfer" and "LZ Endpoint Address" once `Botanix` network becomes available.

## Installation and Deployment

1. Navigate to the project directory: `cd Contract`
2. Install dependencies: `npm install`
3. Deploy contract: `npx hardhat run scripts/deploy.js --network botanix`

- After successfully deployed contracts you need to set trusted remote address , please refer to LayerZero documentation.`https://layerzero.gitbook.io/docs/evm-guides/master/set-trusted-remotes`

- Open the `setTrustedAddr.js` and fill in the appropriate fields where:
- `const SEPOLIA` = LayerZero endpoint Id in our case this is for Sepolia = `10161`
- `const ARBITRUM ` = LayerZero endpoint Id in our case this is for Arbitrum Sepolia = `10231`
- `const contractAddressSepolia` = Deployed contract address on the Sepolia network

Note: For a contract using LayerZero, a trusted remote is another contract it will accept messages from. You can set a trusted remote address using [this guide](https://layerzero.gitbook.io/docs/evm-guides/master/set-trusted-remotes).
Check if available `Botanix` network if not pass any `address` and `id`, only functions to create, sell and buy will be available.

4. Set trusted remote adrres: `npx hardhat run scripts/setTrustedAddr.js --network botanix`

## Usage

Once the contract is deployed and linked trusted addreses you can interact with it using various functionalities provided by the smart contract.

### Creating NFTs

To create a new NFT, you can use the `createToken` function, specifying the token URI and price. This function mints a new token and adds it to the marketplace.

### Listing NFTs on the Marketplace

After creating an NFT, you can list it on the marketplace using the `createMarketSale` function. Specify the token ID and the sale value to put the NFT up for sale. Once listed, other users can purchase the NFT from the marketplace.

### Transferring NFTs

The smart contract supports transferring NFTs across LayerZero chains. While Botanix network integration is not yet available, you can test transferring NFTs on other supported networks like Sepolia and Arbitrum. Use the provided functions for sending and receiving NFTs across chains.

### Fetching Market Items and NFTs

You can fetch market items and NFTs using the provided functions:

- `fetchMarketItems`: Returns market items available for sale.
- `fetchMyNFTs`: Returns NFTs owned by the caller.
- `fetchItemsListed`: Returns items listed by the caller.

### Additional Functionalities

- `cancelListing`: Allows the owner to cancel a listed item.
- `resellToken`: Allows the owner to re-list an NFT for sale.
- `withdraw`: Withdraws funds from the contract.
