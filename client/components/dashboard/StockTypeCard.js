import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { numberWithCommas } from '../../lib/index'
import useProjectProgress from '../../hooks/useProjectProgress'

const StockTypeCard = ({
  name = '',
  imgUrl = '',
  price,
  change,
  roi,
  toggleIsOpen,
  setContent,
  investmentType,
  investmentProject,
}) => {
  const { data: progressData } = useProjectProgress(investmentProject)
  return (
    <div className="flex flex-col items-center col-span-1 p-4 border-2 shadow-sm rounded-xl bg-gray-50 xl:p-6">
      <div className="flex w-[100%] justify-between items-center">
        <div className="flex items-center space-x-4">
          {imgUrl ? <Image src={imgUrl} width={50} height={50} /> : null}
          <h4 className="text-2xl font-medium text-center text-gray-700 ">
            {name}
          </h4>
        </div>
        <span className="text-2xl xl:text-3xl">
          Rs. {numberWithCommas(price)}
        </span>
      </div>
      <div className="text-md text-gray-500 flex w-[100%] items-baseline justify-between mt-4 mb-2 pb-4">
        {/* Change */}
        <span>Change {change}</span>
        {/* Price */}
        {/* Roi */}
        <span>ROI {roi}</span>
      </div>
      {progressData ? (
        <div className="w-full h-1 mb-4 bg-gray-300 ">
          <div
            style={{ width: `${progressData.progress * 100}%` }}
            className={`h-full ${
              progressData.progress * 100 < 50
                ? 'bg-yellow-600'
                : 'bg-purple-600'
            }`}
          ></div>
        </div>
      ) : null}

      <div className="text-gray-500 flex w-[100%] items-center justify-between">
        <p className="cursor-pointer hover:text-blue-400">
          Target: {numberWithCommas(progressData?.target)}
        </p>
        <button
          onClick={() => {
            toggleIsOpen()
            setContent({
              name,
              price: price,
              investmentType: investmentType,
              investmentProject: investmentProject,
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
