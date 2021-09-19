import React from 'react'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'
import StockTypeCard from './StockTypeCard'
import StandardButton from '../buttons/StandardButton'

const StockInvestmentCard = ({ toggleIsOpen, setContent }) => {
  return (
    <Disclosure>
      <Disclosure.Button
        as="div"
        className={clsx(
          'col-span-3 p-4 space-y-4 rounded-md xl:p-6 cursor-pointer bg-purple-100'
        )}
      >
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/stockicon.svg"
              alt="stock icon"
              width={35}
              height={35}
            />
            <h3 className="text-2xl text-gray-800">Stocks</h3>
          </div>
          <p className="text-lg">
            Invest in a variety of local and international stocks
          </p>
          <StandardButton
            classNames={[
              'bg-purple-700',
              'hover:bg-purple-600',
              'focus-visible:ring-purple-500',
            ]}
          >
            Explore
          </StandardButton>
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className={clsx('col-span-3')}>
        <div className="grid grid-cols-3 gap-4 xl:gap-8">
          <StockTypeCard
            name="Tesla"
            imgUrl="/tesla-1.png"
            price="Rs. 10310"
            change="+6%"
            roi="5%"
            setContent={setContent}
            toggleIsOpen={toggleIsOpen}
          />
          <StockTypeCard
            name="Apple"
            imgUrl="/apple-1.png"
            price="Rs. 7880"
            change="+4%"
            roi="3%"
            setContent={setContent}
            toggleIsOpen={toggleIsOpen}
          />
          <StockTypeCard
            name="Google"
            imgUrl="/google-1.png"
            price="Rs. 12720"
            change="+12%"
            roi="7%"
            toggleIsOpen={toggleIsOpen}
            setContent={setContent}
          />
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}

export default StockInvestmentCard
