/* eslint-disable no-console */
import clsx from 'clsx'
import React from 'react'
import { VscSearch } from 'react-icons/vsc'

function NavLarge({ links, isSticky }) {
  return (
    <nav
      className={clsx(
        'text-gray-100 shadow-sm col-span-4 lg:col-span-6 z-10 px-10 xl:px-20 2xl:px-40 relative top-0 bg-gradient-to-br from-gray-700 via-gray-900 to-black',
        isSticky ? 'sticky' : null
      )}
    >
      <ul className="flex items-center justify-between px-8 py-5">
        {/* Left Brand */}
        <li className="cursor-pointer">
          <img src="/finvestLogo.svg" alt="finvest" width="85%" />
        </li>
        {/* Right Links */}
        <li>
          <ul className="flex items-center justify-between xl:space-x-6 lg:space-x-2">
            {/* {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <NavLink href={href} label={label} />
              </li>
            ))} */}
            <li className="flex items-center px-4 py-3 bg-gray-100 rounded-full">
              <VscSearch size={15} color="black" />
              <input
                type="search"
                placeholder="Search"
                className="w-[80%] mx-2 bg-gray-100 outline-none"
              />
            </li>
            <img src="/user.png" alt="user" width="10%" />
            <li className="py-1 text-lg transition duration-100 ease-in-out cursor-pointer hover:border-b-2 hover:border-purple-600">
              Sign out
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavLarge
