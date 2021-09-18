import React, { useCallback } from 'react'
import clsx from 'clsx'
import Nav from './navbar/Nav'
import useSidebar from '../hooks/useSidebar'
import Sidebar from './sidebar/Sidebar'

export default function Layout({ children }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  const closeSidebar = useCallback(() => {
    if (isSidebarOpen) {
      toggleSidebar()
    }
  }, [isSidebarOpen, toggleSidebar])

  return (
    <section>
      <div className="grid grid-cols-4 bg-white lg:grid-cols-6 dark:bg-gray-700">
        {/* Navbar */}
        <Nav className="" />
        {/* Children */}
        <div className="col-span-1">
          <Sidebar />
        </div>
        <main
          onClick={closeSidebar}
          className={clsx(
            isSidebarOpen ? 'filter blur-sm ' : null,
            'bg-gray-100 min-h-screen col-span-3 lg:col-span-5  border-2 border-red-500'
          )}
        >
          {children}
        </main>
        <footer className="col-span-4 lg:col-span-6"></footer>
        {/* Footer */}
      </div>
    </section>
  )
}
