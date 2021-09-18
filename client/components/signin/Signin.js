import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

function Signin() {
  return (
    <nav
      className={'col-span-4 lg:col-span-6 z-10 px-10 xl:px-20 2xl:px-40 relative top-0 bg-white'}
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
            <li className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
              <a> Sign In </a>
            </li>
            <li>
            <a> Sign Up </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Signin;
