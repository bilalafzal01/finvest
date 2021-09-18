/* eslint-disable no-console */
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { VscChromeClose, VscMenu } from 'react-icons/vsc'
import useSidebar from '../../hooks/useSidebar'
import NavLink from './NavLink'
import IconButton from '../buttons/IconButton'

function NavSmall({ links, isSticky }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <nav
      className={clsx(
        'z-10 relative top-0 col-span-4',
        isSticky ? 'sticky' : null
      )}
    >
      <ul className="flex items-center justify-between px-8 py-4 md:py-5">
        <li>
          <IconButton iconSize={20} onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <VscChromeClose
                size={20}
                // color={theme.name === 'dark' ? 'white' : '#000'}
                className="hover:text-pPurple-400"
              />
            ) : (
              <VscMenu
                size={20}
                // color={theme.name === 'dark' ? 'white' : '#000'}
                className="hover:text-pPurple-400"
              />
            )}
          </IconButton>
        </li>
        <li>
          <h1 className="text-lg md:text-2xl">
            <Link href="/">
              <a className="font-bold text-dark dark:text-gray-100 dark:hover:text-primary-300 ">
                {'< Bilal Afzal />'}
              </a>
            </Link>
          </h1>
        </li>
      </ul>
      {isSidebarOpen && (
        <ul className="shadow-sm  space-y-5 p-5 z-10 dark:bg-dark bg-white dark:text-gray-100 w-[100%] min-h-[50%]">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <NavLink href={href} label={label} />
            </li>
          ))}
          <li className="mx-4">
            <StyledButton fontSize="lg" onClick={() => console.log(`Hey`)}>
              Say Hello
            </StyledButton>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavSmall
