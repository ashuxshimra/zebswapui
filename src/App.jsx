import React from 'react';
import Header from './components/Header';
import SwapCard from './components/SwapCard';

function App() {
  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center py-6 overflow-x-hidden">
        {/* Main heading with gradient text */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-8 mb-2 gradient-text px-4">
          Swap Instantly on ZebSwap
        </h1>
        
        {/* Subtitle */}
        <div className="mb-8 text-center px-4">
          <p className="text-lg text-gray-300">
            Powered by <span className="text-red-400">MarsChain</span> & <span className="text-blue-400">Arbitrum Orbit</span>
          </p>
        </div>
        
        {/* Network and stats info */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full justify-center px-4">
          <div className="bg-card px-5 py-2 rounded-full flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span className="text-gray-300">Network: <span className="text-white">MarsChain</span></span>
          </div>
          
          <div className="bg-card px-5 py-2 rounded-full flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-gray-300">24h Volume: <span className="text-white">2.4M MARS</span></span>
          </div>
        </div>
        
        {/* Swap interface card */}
        <SwapCard />
      </main>
      
      {/* Analytics icon bottom right */}
      <div className="fixed bottom-8 right-8">
        <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;