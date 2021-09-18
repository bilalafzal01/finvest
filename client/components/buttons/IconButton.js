import React from 'react'
import { VscMenu } from 'react-icons/vsc'

function IconButton({ iconSize, iconColor, onClick, children }) {
  return (
    <button
      aria-label="Icon button"
      onClick={onClick}
      className="flex items-center justify-center p-0 m-0"
    >
      {children ? (
        children
      ) : (
        <VscMenu
          size={iconSize ? iconSize : 20}
          color={iconColor ? iconColor : '#000'}
          className="hover:text-pPurple-400"
        />
      )}
    </button>
  )
}

export default IconButton
