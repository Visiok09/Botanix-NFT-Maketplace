import React, { useState, useEffect, useContext } from 'react';
import img from '../../assets';
import Style from './ChainId.module.css';
import Image from 'next/image';
import { saveNetworkToLocalStorage } from '../../context/walletStorage';
import { NFTContext } from '../../context/NFTContext';

const ChainId = ({ onChangeChain, onMouseLeave }) => {
  const { setCurrentChain } = useContext(NFTContext);

  const networkHandler = async (e, chainName) => {
    let rpcUrl;

    switch (e) {
      case '0x66eee':
        rpcUrl = 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public';
        break;
      case '0xaa37dc':
        rpcUrl = 'https://optimism-sepolia.blockpi.network/v1/rpc/public';
        break;
      case '0xe34':
        rpcUrl = 'https://node.botanixlabs.dev';
        break;

      default:
        rpcUrl = 'https://node.botanixlabs.dev';
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: e }],
      });
      onChangeChain(chainName);
      saveNetworkToLocalStorage(e, chainName);
      const decimalChainId = parseInt(e, 16);

      setCurrentChain(decimalChainId);
    } catch (error) {
      if (error.code === 4902) {
        const isAdded = await addNetwork(chainName, e, rpcUrl);
        onChangeChain(chainName);

        const decimalChainId = parseInt(e, 16);

        setCurrentChain(decimalChainId);
        if (isAdded) {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: e }],
          });

          //setCurrentChain(chainId);
        } else {
          // Handle the case where the user decided not to add the network or encountered an error during network addition.
        }
      } else {
        // Handle other errors that may occur during chain switch.
        // You can display an error message or take appropriate action.
      }
    }
  };

  const addNetwork = async (chainName, chainId, rpcUrl) => {
    try {
      let name, symbol;
      let chain = parseInt(chainId, 16);

      if (chain === 3636) {
        name = 'Bitcoin';
        symbol = 'BTC';
      } else {
        name = 'Ether';
        symbol = 'ETH';
      }

      return await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId,
            chainName,
            rpcUrls: [rpcUrl],
            nativeCurrency: {
              name,
              symbol,
              decimals: 18,
            },
          },
        ],
      });
    } catch (error) {
      // Handle any errors that may occur during network addition.
      // You can display an error message or take appropriate action.
      return false;
    }
  };

  return (
    <div onMouseLeave={onMouseLeave} className={Style.networkStyle}>
      <ul>
        <li
          className={Style.linkBox}
          onClick={() => networkHandler('0x66eee', 'Arbitrum Sepolia')}
        >
          <Image src={img.arbione} alt="arbitrum" width={35} height={35} />
          <b>Arbitrum</b>
        </li>
        <li
          className={Style.linkBox}
          onClick={() => networkHandler('0xe34', 'Botanix Testnet')}
        >
          <Image src={img.botanix} alt="botanix" width={45} height={45} />
          <b>Botanix</b>
        </li>

        <li
          className={Style.linkBox}
          onClick={() => networkHandler('0xaa37dc', 'Optimism')}
        >
          <Image src={img.optimism} alt="optimism" width={35} height={35} />
          <b>Optimism</b>
        </li>
      </ul>
    </div>
  );
};

export default ChainId;
