import React from 'react'
import clsx from 'clsx'

function StandardButton({ onClick, children, classNames = [] }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        if (onClick) onClick(e)
      }}
      className={clsx(
        'inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ',
        ...classNames
      )}
    >
      {children}
    </button>
  )
}

export default StandardButton
