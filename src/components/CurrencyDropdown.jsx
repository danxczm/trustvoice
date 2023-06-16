import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import {
  SiTether,
  SiBitcoin,
  SiBitcoincash,
  SiLitecoin,
  SiDogecoin,
  SiEthereum,
} from 'react-icons/si';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

function CurrencyDropdown({ selectedSymbol, setSelectedSymbol }) {
  const [isCurrencyListOpen, setIsCurrencyListOpen] = useState(false);
  let currencyData;

  const CURRENCY_DATA = gql`
    query CurrencyData {
      widgetRates(
        currencyCodesArray: ["USDT", "BTC", "ETH", "BCH", "LTC", "DOGE"]
        deviceId: "anythingForDifferentClients"
      )
    }
  `;

  const { data, loading, error } = useQuery(CURRENCY_DATA);

  if (loading) console.log(`loading...`);
  if (error) console.log(`error`);

  if (data) {
    currencyData = data.widgetRates.ratesArray;
    const currencyDataObject = currencyData.map(el => console.log(`el: `, el));
  }

  const options = [
    { symbol: 'USDT', currency: 'tether', icon: <SiTether /> },
    { symbol: 'BTC', currency: 'bitcoin', icon: <SiBitcoin /> },
    { symbol: 'ETH', currency: 'ethereum', icon: <SiEthereum /> },
    { symbol: 'BCH', currency: 'bitcoin-cash', icon: <SiBitcoincash /> },
    { symbol: 'LTC', currency: 'litecoin', icon: <SiLitecoin /> },
    { symbol: 'DOGE', currency: 'dogecoin', icon: <SiDogecoin /> },
  ];

  const handleCurrencyChange = symbol => {
    setSelectedSymbol(symbol);
    setIsCurrencyListOpen(false);
  };

  const toggleCurrencyList = () => {
    setIsCurrencyListOpen(!isCurrencyListOpen);
  };

  return (
    <div className="relative flex flex-column justify-center items-center  w-28 rounded-lg">
      <button
        onClick={toggleCurrencyList}
        className="w-full flex justify-center items-center
        rounded-lg  border-transparent active:border-white duration-300
        active:text-white"
      >
        {selectedSymbol}
        {!isCurrencyListOpen ? (
          <AiOutlineCaretDown className="h-3" />
        ) : (
          <AiOutlineCaretUp className="h-3" />
        )}
      </button>
      {isCurrencyListOpen && (
        <div className="bg-gray-300 absolute top-10 felx flex-col items-start rounded-lg p-2 w-full">
          {options.map(option => (
            <div key={option.symbol}>
              <button
                type="button"
                onClick={() => handleCurrencyChange(option.symbol)}
                className="flex w-full justify-between items-center hover:bg-gray-400 cursor-pointer border-l-transparent"
              >
                {option.symbol} {option.icon}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencyDropdown;
