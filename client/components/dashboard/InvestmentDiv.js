import React, { Fragment, useState } from 'react'
import StockInvestmentCard from './StockInvestmentCard'
import RealEstateInvestmentCard from './RealEstateInvestmentCard'
import PIBInvestmentCard from './PIBInvestmentCard'
import BuyNowModal from './BuyNowModal'
import useInvestmentTypes from '../../hooks/useInvestmentTypes'

function InvestmentDiv() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  const [content, setContent] = useState(null)

  const { data, isLoading, error } = useInvestmentTypes()
  console.log(data)

  return (
    <div className="grid grid-cols-3 mb-4 xl:mb-8 xl:gap-x-8 lg:gap-x-4 gap-y-4 xl:gap-y-8">
      {isLoading ? <div>loading</div> : null}
      {data
        ? data.map((item, index) => (
            <StockInvestmentCard
              toggleIsOpen={toggleIsOpen}
              setContent={setContent}
              data={item}
              index={index}
            />
          ))
        : null}

      <BuyNowModal
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
        content={content}
      />
    </div>
  )
}

export default InvestmentDiv
