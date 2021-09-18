import React from 'react'
import {
  VscCircuitBoard,
  VscHome,
  VscBellDot,
  VscGear,
  VscQuestion,
} from 'react-icons/vsc'
import Link from 'next/link'

function sidebar() {
  return (
    <ul className="flex flex-col min-h-full px-2 space-y-5 text-gray-100 bg-gray-900 shadow-sm lg:pt-20 lg:px-4 xl:px-6">
      <li>
        <h3 className="pb-2 text-lg text-gray-200 border-b-2 border-gray-500">
          Main Menu
        </h3>
      </li>
      <li>
        <ul className="space-y-3">
          <SidebarLink
            title="Dashboard"
            href="/"
            icon={<VscHome size={20} />}
          />
          <SidebarLink
            title="Portfolio"
            href="/portfolio"
            icon={<VscCircuitBoard size={20} />}
          />
          <SidebarLink
            title="Notifications"
            href="/notifications"
            icon={<VscBellDot size={20} />}
          />
        </ul>
      </li>
      <li>
        <h3 className="pb-2 text-lg text-gray-200 border-b-2 border-gray-500">
          Support
        </h3>
      </li>
      <li>
        <ul className="space-y-3">
          <SidebarLink
            title="Help and Support"
            href="/help"
            icon={<VscQuestion size={20} />}
          />
          <SidebarLink
            title="Settings"
            href="/settings"
            icon={<VscGear size={20} />}
          />
        </ul>
      </li>
    </ul>
  )
}

export default sidebar

const SidebarLink = ({ title, href, icon }) => {
  return (
    <li className="transition duration-100 ease-out cursor-pointer hover:bg-purple-700 hover:text-white">
      <Link href={href}>
        <a className="flex items-center px-4 py-2 space-x-4 ">
          {icon}
          <h4 className="text-lg">{title}</h4>
        </a>
      </Link>
    </li>
  )
}
