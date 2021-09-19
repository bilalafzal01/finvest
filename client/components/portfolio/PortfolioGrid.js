import React from 'react'

function PortfolioGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 pt-4 bg-gray-100 divide-y-2 rounded-md xl:pt-8">
      {/* Asset, invested, profit */}
      <div className="grid grid-cols-3 col-span-3 text-center">
        <h2 className="text-2xl font-medium text-gray-800">Assets</h2>
        <h2 className="text-2xl font-medium text-gray-800">Invested</h2>
        <h2 className="text-2xl font-medium text-gray-800">Profit/Loss</h2>
      </div>
      <div className="col-span-3 py-4 space-y-4 text-xl text-center text-black divide-y-2 font-poppins">
        <div className="grid grid-cols-3 col-span-3 py-4 text-center">
          <span>Stocks</span>
          <span>Rs. 21500</span>
          <span>+400</span>
        </div>
        <div className="grid grid-cols-3 col-span-3 py-4 text-center">
          <span>Real Estate</span>
          <span>Rs. 42500</span>
          <span>+1200</span>
        </div>
        <div className="grid grid-cols-3 col-span-3 py-4 text-center">
          <span>PIB</span>
          <span>Rs. 50000</span>
          <span>+2500</span>
        </div>
      </div>
      {/* rows */}
    </div>
  )
}

export default PortfolioGrid
