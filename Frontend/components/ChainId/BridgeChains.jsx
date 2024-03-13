import React, { useState, useEffect, useContext } from 'react';
import img from '../../assets';
import Style from './ChainId.module.css';
import Image from 'next/image';
import { NFTContext } from '../../context/NFTContext';
const BridgeChains = ({ onChangeBrigeChain, onMouseLeave, onClick }) => {
  const networkHandler = (chainName, e) => {
    onChangeBrigeChain(chainName, e);
  };
  const { currentChainId } = useContext(NFTContext);

  const chains = [
    {
      mainChain: '3636',
      id: '0',
      name: 'Botanix',
      img: img.botanix,
    },
    {
      mainChain: '11155111',
      id: '10161',
      name: 'Sepolia',
      img: img.ethereum,
    },
    {
      mainChain: '421614',
      id: '10231',
      name: 'Arbitrum ',
      img: img.arbione,
    },
    {
      mainChain: 's00n?',
      id: 's00n?',
      name: 's00n?',
      img: img.soon,
    },
    {
      mainChain: '11155420',
      id: '10232',
      name: 'Optimism',
      img: img.optimism,
    },
  ];

  return (
    <div
      onMouseLeave={onMouseLeave}
      className={Style.BridgeNetworkStyle}
      onClick={onClick}
    >
      <ul>
        {chains
          .filter((chain) => chain.mainChain !== currentChainId)
          .map((chain, index) => {
            // Define an array of the indexes you want to display

            // Check if the currentChainId is 'someId' and only return chains at certain indexes
            if (currentChainId === 421614) {
              const desiredIndexes = [4];
              // Check if the current index is one of the desired indexes
              if (desiredIndexes.includes(index)) {
                return (
                  <li
                    key={chain.id}
                    className={Style.linkBox}
                    onClick={() => networkHandler(chain.name, chain.id)}
                  >
                    <Image
                      src={chain.img}
                      alt={chain.name}
                      width={35}
                      height={35}
                    />
                    <b>{chain.name}</b>
                  </li>
                );
              } else {
                // If the index is not one of the desired ones, do not render anything for this iteration
                return null;
              }
            } else if (currentChainId === 11155111) {
              const desiredIndexes = [2];
              // Check if the current index is one of the desired indexes
              if (desiredIndexes.includes(index)) {
                return (
                  <li
                    key={chain.id}
                    className={Style.linkBox}
                    onClick={() => networkHandler(chain.name, chain.id)}
                  >
                    <Image
                      src={chain.img}
                      alt={chain.name}
                      width={35}
                      height={35}
                    />
                    <b>{chain.name}</b>
                  </li>
                );
              } else {
                // If the index is not one of the desired ones, do not render anything for this iteration
                return null;
              }
            } else if (currentChainId === 11155420) {
              const desiredIndexes = [2];
              // Check if the current index is one of the desired indexes
              if (desiredIndexes.includes(index)) {
                return (
                  <li
                    key={chain.id}
                    className={Style.linkBox}
                    onClick={() => networkHandler(chain.name, chain.id)}
                  >
                    <Image
                      src={chain.img}
                      alt={chain.name}
                      width={35}
                      height={35}
                    />
                    <b>{chain.name}</b>
                  </li>
                );
              } else {
                // If the index is not one of the desired ones, do not render anything for this iteration
                return null;
              }
            } else if (currentChainId === 3636) {
              const desiredIndexes = [3];
              // Check if the current index is one of the desired indexes
              if (desiredIndexes.includes(index)) {
                return (
                  <li
                    key={chain.id}
                    className={Style.linkBox}
                    //onClick={() => networkHandler(chain.name, chain.id)}
                  >
                    <Image
                      src={chain.img}
                      alt={chain.name}
                      width={35}
                      height={35}
                    />
                    <b>{chain.name}</b>
                  </li>
                );
              } else {
                // If the index is not one of the desired ones, do not render anything for this iteration
                return null;
              }
            } else {
              // If currentChainId is not 'someId', render all items as normal
              return (
                <li
                  key={chain.id}
                  className={Style.linkBox}
                  onClick={() => networkHandler(chain.name, chain.id)}
                >
                  <Image
                    src={chain.img}
                    alt={chain.name}
                    width={35}
                    height={35}
                  />
                  <b>{chain.name}</b>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default BridgeChains;
