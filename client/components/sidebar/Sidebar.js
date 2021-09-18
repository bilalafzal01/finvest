import React from 'react'
import { Link } from 'next/link'
import {
  VscCircuitBoard,
  VscHome,
  VscGraph,
  VscBellDot,
  VscGear,
  VscQuestion,
} from 'react-icons/vsc'

function sidebar() {
  return (
    <ul className="flex flex-col min-h-full px-2 space-y-5 shadow-sm lg:pt-20 lg:px-4 xl:px-6">
      <li>
        <h3 className="text-lg text-gray-500">Main Menu</h3>
      </li>
      <li>
        <ul className="space-y-3">
          <li className="flex items-center px-4 py-2 space-x-4 text-gray-900 transition duration-100 ease-out cursor-pointer hover:bg-red-500 hover:text-white">
            <VscHome size={20} />
            <h4 className="text-lg">Dashboard</h4>
          </li>
          <li className="flex items-center px-4 py-2 space-x-4 text-gray-900 transition duration-100 ease-out cursor-pointer hover:bg-red-500 hover:text-white">
            <VscCircuitBoard size={20} />
            <h4 className="text-lg">Portfolio</h4>
          </li>
          <li className="flex items-center px-4 py-2 space-x-4 text-gray-900 transition duration-100 ease-out cursor-pointer hover:bg-red-500 hover:text-white">
            <VscBellDot size={20} />
            <h4 className="text-lg">Notifications</h4>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="text-lg text-gray-500">Support</h3>
      </li>
      <li>
        <ul className="space-y-3">
          <li className="flex items-center px-4 py-2 space-x-4 text-gray-900 transition duration-100 ease-out cursor-pointer hover:bg-red-500 hover:text-white">
            <VscQuestion size={20} />
            <h4 className="text-lg">Help and Support</h4>
          </li>
          <li className="flex items-center px-4 py-2 space-x-4 text-gray-900 transition duration-100 ease-out cursor-pointer hover:bg-red-500 hover:text-white">
            <VscGear size={20} />
            <h4 className="text-lg">Settings</h4>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default sidebar
