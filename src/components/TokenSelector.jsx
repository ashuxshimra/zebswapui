import React, { useState, useRef, useEffect } from 'react';

function TokenSelector({ token, onSelectToken, availableTokens }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Default tokens if none provided
  const tokens = availableTokens || [
    { symbol: 'MARS', icon: 'M', color: 'bg-red-600' },
    { symbol: 'ETH', icon: 'E', color: 'bg-blue-600' },
    { symbol: 'USDC', icon: 'U', color: 'bg-green-600' },
    { symbol: 'BTC', icon: 'B', color: 'bg-orange-600' }
  ];
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center bg-card-light rounded-lg pr-2 pl-1 py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-8 h-8 rounded-full ${token.color || 'bg-blue-600'} flex items-center justify-center mr-2`}>
          <span className="font-bold text-white">{token.icon}</span>
        </div>
        <span className="font-medium text-white mr-1">{token.symbol}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      
      {/* Token dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-lg py-2 z-50">
          <div className="px-3 py-2 text-sm font-medium text-gray-400">Select Token</div>
          <div className="max-h-48 overflow-y-auto">
            {tokens.map((t) => (
              <div 
                key={t.symbol} 
                className="flex items-center px-3 py-2 hover:bg-card-light cursor-pointer"
                onClick={() => {
                  onSelectToken(t);
                  setIsOpen(false);
                }}
              >
                <div className={`w-6 h-6 rounded-full ${t.color || 'bg-blue-600'} flex items-center justify-center mr-2`}>
                  <span className="font-bold text-white text-sm">{t.icon}</span>
                </div>
                <span className="font-medium text-white">{t.symbol}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TokenSelector;