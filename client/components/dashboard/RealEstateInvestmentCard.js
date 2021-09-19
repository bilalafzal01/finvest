import React from 'react'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'
import StockTypeCard from './StockTypeCard'
import StandardButton from '../buttons/StandardButton'

const RealEstateInvestmentCard = ({ toggleIsOpen, setContent }) => (
  <Disclosure>
    <Disclosure.Button
      as="div"
      className={clsx(
        'col-span-3 p-4 space-y-4 rounded-md xl:p-6 cursor-pointer bg-yellow-100'
      )}
    >
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/realestateicon.svg"
            alt="stock icon"
            width={35}
            height={35}
          />
          <h3 className="text-2xl text-gray-800">Real Estate</h3>
        </div>
        <p className="text-lg">
          Find housing and real estate investment opportunities
        </p>
        <StandardButton
          classNames={[
            'bg-yellow-700',
            'hover:bg-yellow-600',
            'focus-visible:ring-yellow-500',
          ]}
        >
          Explore
        </StandardButton>
      </div>
    </Disclosure.Button>
    <Disclosure.Panel className={clsx('col-span-3')}>
      <div className="grid grid-cols-3 gap-4 xl:gap-8">
        <StockTypeCard
          name="Centaurus"
          imgUrl=""
          price="Rs. 4310"
          change="+6%"
          roi="5%"
          toggleIsOpen={toggleIsOpen}
          setContent={setContent}
        />
        <StockTypeCard
          name="Bahria Town"
          imgUrl=""
          price="Rs. 9880"
          change="+4%"
          roi="3%"
          toggleIsOpen={toggleIsOpen}
          setContent={setContent}
        />
        <StockTypeCard
          name="Gawadar"
          imgUrl=""
          price="Rs. 13720"
          change="+12%"
          roi="7%"
          toggleIsOpen={toggleIsOpen}
          setContent={setContent}
        />
      </div>
    </Disclosure.Panel>
  </Disclosure>
)
export default RealEstateInvestmentCard
