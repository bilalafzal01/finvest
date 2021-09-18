/* eslint-disable no-console */
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import { Image } from 'next/image'

function NavLarge({ links, isSticky }) {
  return (
    <nav
      className={clsx(
        'col-span-4 lg:col-span-6 z-10 px-10 xl:px-20 2xl:px-40 relative top-0 bg-white',
        isSticky ? 'sticky' : null
      )}
    >
      <ul className="flex items-center justify-between px-8 py-6">
        {/* Left Brand */}
        <li>
          <h1 className="p-0 m-0 text-3xl">
            <Link href="/">
              <a className="transition ease-in-out duration-250 dark:text-gray-100 dark:hover:text-primary-300">
                {'Finvest'}
              </a>
            </Link>
          </h1>
        </li>
        {/* Right Links */}
        <li>
          <ul className="flex items-center justify-between xl:space-x-4 lg:space-x-1">
            {/* {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <NavLink href={href} label={label} />
              </li>
            ))} */}
            <li className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
              <VscSearch size={20} color="" />
              <input
                type="search"
                placeholder="Search"
                className="w-[80%] mx-2 bg-gray-100 outline-none"
              />
            </li>
            <li>
              {/* <Image
                src="avatar.svg"
                width={100}
                height={100}
                alt="Picture of the author"
              /> */}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavLarge
