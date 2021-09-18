import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

const StockTypeCard = ({
  name = '',
  imgUrl = '',
  price,
  change,
  roi,
  toggleIsOpen,
  setContent,
}) => {
  return (
    <div className="flex flex-col items-center col-span-1 p-4 border-2 shadow-sm rounded-xl bg-gray-50 xl:p-6">
      <div className="flex w-[100%] justify-between items-center">
        <div className="flex items-center space-x-4">
          {imgUrl ? <Image src={imgUrl} width={50} height={50} /> : null}
          <h4 className="text-2xl font-medium text-center text-gray-700 ">
            {name}
          </h4>
        </div>
        <span className="text-2xl xl:text-3xl">{price}</span>
      </div>
      <div className="text-md text-gray-500 flex w-[100%] items-baseline justify-between my-4 pb-4 border-b-2 ">
        {/* Change */}
        <span>Change {change}</span>
        {/* Price */}
        {/* Roi */}
        <span>ROI {roi}</span>
      </div>
      <div className="text-gray-500 flex w-[100%] items-center justify-between">
        <p className="cursor-pointer hover:text-blue-400">More Info</p>
        <button
          onClick={() => {
            toggleIsOpen()
            setContent({
              name,
            })
          }}
          type="button"
          className="inline-flex justify-center px-4 py-2 font-medium text-white bg-purple-700 border border-transparent rounded-md hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-purple:ring-pink-500"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default StockTypeCard
