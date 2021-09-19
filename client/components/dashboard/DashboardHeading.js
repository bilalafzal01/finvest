import React from 'react'
import StandardButton from '../buttons/StandardButton'
import EasyInvestModal from './EasyInvestModal'

function DashboardHeading({ title = 'Dashboard' }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <div className="flex items-center justify-between mb-4 xl:mb-8">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="flex items-center space-x-4">
        <p>New to investing?</p>
        <StandardButton
          onClick={toggleIsOpen}
          classNames={[
            'bg-blue-700',
            'hover:bg-blue-600',
            'focus-visible:ring-blue-500',
          ]}
        >
          EASY INVEST
        </StandardButton>
      </div>
      <EasyInvestModal isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
    </div>
  )
}

export default DashboardHeading
