import React from 'react'
import { Menu } from '@headlessui/react'
import { VscListFilter } from 'react-icons/vsc'

function DashboardHeading() {
  return (
    <div className="flex items-center justify-between mb-4 xl:mb-8">
      <h1 className="text-3xl font-medium">Dashboard</h1>
      <Menu>
        <Menu.Button className="flex items-center space-x-2 text-lg">
          <VscListFilter size={20} />
          <span>Filter</span>
        </Menu.Button>
      </Menu>
    </div>
  )
}

export default DashboardHeading
