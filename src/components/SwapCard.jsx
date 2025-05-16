import React, { useState, useEffect } from 'react';
import TokenSelector from './TokenSelector';
import SwapButton from './SwapButton';
import SwapDetails from './SwapDetails';

function SwapCard() {
  // Available tokens
  const availableTokens = [
    { symbol: 'MARS', balance: 12.45, icon: 'M', color: 'bg-red-600' },
    { symbol: 'ETH', balance: 0.42, icon: 'E', color: 'bg-blue-600' },
    { symbol: 'USDC', balance: 156.78, icon: 'U', color: 'bg-green-600' },
    { symbol: 'BTC', balance: 0.0012, icon: 'B', color: 'bg-orange-600' }
  ];
  
  // State for selected tokens
  const [fromToken, setFromToken] = useState(availableTokens[0]);
  const [toToken, setToToken] = useState(availableTokens[1]);
  
  // State for token amounts
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  
  // Mock exchange rate calculation
  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount))) {
      // Simple mock exchange rates
      const rates = {
        'MARS-ETH': 0.0085,
        'MARS-USDC': 1.02,
        'MARS-BTC': 0.000021,
        'ETH-MARS': 117.65,
        'ETH-USDC': 120.04,
        'ETH-BTC': 0.0615,
        'USDC-MARS': 0.98,
        'USDC-ETH': 0.0083,
        'USDC-BTC': 0.000051,
        'BTC-MARS': 47619,
        'BTC-ETH': 16.26,
        'BTC-USDC': 19608
      };
      
      const pair = `${fromToken.symbol}-${toToken.symbol}`;
      const rate = rates[pair] || 1;
      
      setToAmount((parseFloat(fromAmount) * rate).toFixed(4));
    } else {
      setToAmount('');
    }
  }, [fromAmount, fromToken, toToken]);
  
  // Swap the tokens
  const handleSwapTokens = () => {
    const tempToken = fromToken;
    const tempAmount = fromAmount;
    
    setFromToken(toToken);
    setFromAmount(toAmount);
    
    setToToken(tempToken);
    setToAmount(tempAmount);
  };
  
  // Use MAX button
  const handleMaxClick = () => {
    setFromAmount(fromToken.balance.toString());
  };
  
  // Calculate swap details
  const swapDetails = {
    estimatedOutput: toAmount ? `${toAmount} ${toToken.symbol}` : `0.00 ${toToken.symbol}`,
    fee: `${(parseFloat(fromAmount || '0') * 0.003).toFixed(4)} ${fromToken.symbol}`,
    estimatedGas: `-0.03 ${fromToken.symbol}`,
    slippageTolerance: '0.5%'
  };
  
  // New card style with updated colors
  const cardStyle = {
    backgroundColor: 'rgba(26, 26, 26, 0.85)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  };

  const inputBgStyle = {
    backgroundColor: 'rgba(42, 42, 42, 0.8)'
  };
  
  return (
    <div className="w-full max-w-md px-4">
      <div className="swap-card p-6 overflow-hidden" style={cardStyle}>
        {/* Card Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Swap</h2>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </button>
        </div>
        
        {/* From Token Section */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">From</span>
            <span className="text-gray-400">Balance: {fromToken.balance} {fromToken.symbol}</span>
          </div>
          
          <div className="flex items-center rounded-lg p-3" style={inputBgStyle}>
            <TokenSelector 
              token={fromToken} 
              onSelectToken={(token) => {
                if (token.symbol === toToken.symbol) {
                  // Swap tokens if same token is selected
                  setToToken(fromToken);
                }
                setFromToken(token);
              }}
              availableTokens={availableTokens}
            />
            
            <div className="flex-grow flex justify-end items-center">
              <input 
                type="text" 
                placeholder="0.00" 
                value={fromAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || /^\d*\.?\d*$/.test(value)) {
                    setFromAmount(value);
                  }
                }}
                className="bg-transparent text-white text-2xl text-right outline-none w-full" 
              />
              <button 
                className="ml-2 px-2 py-1 rounded text-xs text-white hover:opacity-80 transition-colors"
                style={{ backgroundColor: '#8b5cf6' }}
                onClick={handleMaxClick}
              >
                MAX
              </button>
            </div>
          </div>
        </div>
        
        {/* Swap Direction Button */}
        <div className="flex justify-center -my-4 relative z-10">
          <SwapButton onSwapTokens={handleSwapTokens} />
        </div>
        
        {/* To Token Section */}
        <div className="mb-6 mt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">To</span>
            <span className="text-gray-400">Balance: {toToken.balance} {toToken.symbol}</span>
          </div>
          
          <div className="flex items-center rounded-lg p-3" style={inputBgStyle}>
            <TokenSelector 
              token={toToken} 
              onSelectToken={(token) => {
                if (token.symbol === fromToken.symbol) {
                  // Swap tokens if same token is selected
                  setFromToken(toToken);
                }
                setToToken(token);
              }}
              availableTokens={availableTokens}
            />
            
            <div className="flex-grow">
              <input 
                type="text" 
                placeholder="0.00" 
                value={toAmount}
                className="bg-transparent text-white text-2xl text-right outline-none w-full" 
                readOnly 
              />
            </div>
          </div>
        </div>
        
        {/* Swap Details */}
        <SwapDetails details={swapDetails} />
        
        {/* Swap Button */}
        <button 
          className="w-full text-white font-semibold py-3 rounded-lg mt-4 transition-all hover:shadow-lg disabled:opacity-50"
          style={{ 
            background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
            boxShadow: !fromAmount || parseFloat(fromAmount) <= 0 ? 'none' : '0 0 10px rgba(139, 92, 246, 0.5)'
          }}
          disabled={!fromAmount || parseFloat(fromAmount) <= 0}
        >
          {!fromAmount || parseFloat(fromAmount) <= 0 ? 'Enter an amount' : 'Swap'}
        </button>
      </div>
    </div>
  );
}

export default SwapCard;