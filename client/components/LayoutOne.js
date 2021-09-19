import React, { useCallback } from 'react'
import clsx from 'clsx'
import Nav from './navbar/Nav'
import useSidebar from '../hooks/useSidebar'
import Sidebar from './sidebar/Sidebar'
import useUser from '../hooks/useUser'
import router from 'next/router'

export default function LayoutOne({ children }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  const closeSidebar = useCallback(() => {
    if (isSidebarOpen) {
      toggleSidebar()
    }
  }, [isSidebarOpen, toggleSidebar])

  if (process.browser) {
    var { user, isLoading, error } = useUser(localStorage.getItem('userId'))
    if (!user && !isLoading) {
      router.push(`/signin`)
    }
  }

  return (
    <section>
      <div className="grid grid-cols-4 bg-white font-primary lg:grid-cols-6 dark:bg-gray-700">
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
            'bg-gray-100 min-h-screen col-span-3 lg:col-span-5'
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
