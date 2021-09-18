import React from 'react'
import DashboardHeading from './DashboardHeading'
import InfoCard from './InfoCard'
import { GrGoogleWallet } from 'react-icons/gr'
import { AiOutlineStock } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import InvestmentDiv from './InvestmentDiv'
import { useRouter } from 'next/router'

function DashboardMain() {
  const router = useRouter()
  return (
    <div className="min-h-full bg-white rounded-md shadow-sm xl:p-8 lg:p-4">
      {/* dashboard heading */}
      <DashboardHeading />
      {/* Your balance */}
      <div className="grid grid-cols-3 mb-4 xl:mb-8 xl:gap-x-8 lg:gap-x-4">
        <InfoCard
          icon={<GrGoogleWallet size={55} />}
          classNames={['bg-green-100']}
          value="Balance: Rs. 78,450"
          subInfo="45% up this week"
        />
        <InfoCard
          icon={<AiOutlineStock size={55} />}
          classNames={['bg-gray-100']}
          value="Check your stocks"
          subInfo="New updates"
          onClick={(e) => {
            e.preventDefault()
            router.push(`/portfolio`)
          }}
        />
        <InfoCard
          icon={<FaEthereum size={55} />}
          classNames={['bg-gray-100']}
          value="Crypto"
          subInfo="Coming soon!"
        />
      </div>
      {/* investment options */}
      <div className="mb-4 xl:mb-8">
        <h3 className="text-2xl text-gray-700">Investment Options</h3>
      </div>
      <InvestmentDiv />
    </div>
  )
}

export default DashboardMain
