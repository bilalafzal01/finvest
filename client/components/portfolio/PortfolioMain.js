import React from 'react'
import DashboardHeading from '../dashboard/DashboardHeading'
import PortfolioGrid from './PortfolioGrid'

function PortfolioMain() {
  return (
    <div className="min-h-full bg-white rounded-md shadow-sm xl:p-8 lg:p-4">
      {/* dashboard heading */}
      <DashboardHeading title="My Portfolio" />
      <PortfolioGrid />
    </div>
  )
}

export default PortfolioMain
