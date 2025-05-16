import React from 'react';

function SwapButton({ onSwapTokens }) {
  // New button style
  const buttonStyle = {
    backgroundColor: '#2a2a2a',
    border: '4px solid #1a1a1a',
  };

  const hoverStyle = {
    backgroundColor: '#333333',
  };

  return (
    <button 
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      style={buttonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
      }}
      onClick={onSwapTokens}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    </button>
  );
}

export default SwapButton;