import React from 'react';

function SwapDetails({ details }) {
  return (
    <div className="space-y-2 text-sm">
      {/* Estimated Output */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Estimated Output</span>
        <span className="text-white">{details.estimatedOutput}</span>
      </div>

      {/* Fee */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Fee (0.30%)</span>
        <span className="text-white">{details.fee}</span>
      </div>

      {/* Estimated Gas */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Estimated Gas</span>
        <span className="text-white">{details.estimatedGas}</span>
      </div>

      {/* Slippage Tolerance */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Slippage Tolerance</span>
        <span className="text-white">{details.slippageTolerance}</span>
      </div>
    </div>
  );
}

export default SwapDetails;

