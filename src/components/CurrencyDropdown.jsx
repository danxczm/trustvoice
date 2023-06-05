import React, { useState } from 'react';
import {
  SiTether,
  SiBitcoin,
  SiBitcoincash,
  SiLitecoin,
  SiDogecoin,
  SiEthereum,
} from 'react-icons/si';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

function CurrencyDropdown({ selectedCurrency, setSelectedCurrency }) {
  const [isCurrencyListOpen, setIsCurrencyListOpen] = useState(false);

  const options = [
    { currency: 'USDT', icon: <SiTether /> },
    { currency: 'BTC', icon: <SiBitcoin /> },
    { currency: 'ETH', icon: <SiEthereum /> },
    { currency: 'BCH', icon: <SiBitcoincash /> },
    { currency: 'LTC', icon: <SiLitecoin /> },
    { currency: 'DOGE', icon: <SiDogecoin /> },
  ];

  const handleCurrencyChange = currency => {
    setSelectedCurrency(currency);
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
        {selectedCurrency}
        {!isCurrencyListOpen ? (
          <AiOutlineCaretDown className="h-3" />
        ) : (
          <AiOutlineCaretUp className="h-3" />
        )}
      </button>
      {isCurrencyListOpen && (
        <div className="bg-gray-300 absolute top-10 felx flex-col items-start rounded-lg p-2 w-full">
          {options.map(option => (
            <div key={option.currency}>
              <button
                type="button"
                onClick={() => handleCurrencyChange(option.currency)}
                className="flex w-full justify-between items-center hover:bg-gray-400 cursor-pointer border-l-transparent"
              >
                {option.currency} {option.icon}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencyDropdown;
