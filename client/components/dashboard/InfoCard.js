import React from 'react'
import clsx from 'clsx'

function InfoCard({
  icon,
  classNames = [],
  value = '',
  subInfo = '',
  onClick,
}) {
  return (
    <div
      onClick={(e) => {
        if (onClick) onClick(e)
      }}
      className={clsx(
        'p-4 space-y-4 rounded-md xl:p-6 hover:shadow-md cursor-pointer transition duration-100 ease-in-out',
        ...classNames
      )}
    >
      {/* icon left and right */}
      <div className="flex justify-between">{icon}</div>
      {/* amount */}
      <div>
        <h2 className="text-3xl font-medium text-gray-900">{value}</h2>
      </div>
      {/* %age returned */}
      <div className="text-gray-500 ">{subInfo}</div>
    </div>
  )
}

export default InfoCard
