// *********************
// Role of the component: Range with labels for price intented to be on the shop page
// Name of the component: RangeWithLabels.tsx
// Developer: 
// Version: 1.0
// Component call: <RangeWithLabels />
// Input parameters: no input parameters
// Output: range input with the labels
// *********************

"use client";

import React, { useState } from "react";

const RangeWithLabels = () => {
  const [currentRangeWLabelsValue, setCurrentRangeWLabelsValue] =
    useState<number>(0);

  // function for handling range change
  const handleRangeWLabelsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRangeWLabelsValue(parseInt(e.target.value));
  };

  return (
    <div className="animate-slide-in-up">
      <span className="label-text text-lg text-black font-medium">Filtro de precio:</span>
      <input
        type="range"
        min={0}
        max="1000"
        value={currentRangeWLabelsValue}
        onChange={(e) => handleRangeWLabelsValue(e)}
        className="range range-warning w-full mt-2"
        step="200"
      />
      <div className="w-full flex justify-between text-xs px-2 mt-1">
        <span className="text-gray-600">$0</span>
        <span className="text-gray-600">$200</span>
        <span className="text-gray-600">$400</span>
        <span className="text-gray-600">$600</span>
        <span className="text-gray-600">$1000</span>
      </div>
      <div className="mt-2 text-center">
        <span className="text-sm font-medium text-blue-600">
          Precio máximo: ${currentRangeWLabelsValue}
        </span>
      </div>
    </div>
  );
};

export default RangeWithLabels;
