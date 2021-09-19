import React from 'react'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import clsx from 'clsx'
import StockTypeCard from './StockTypeCard'
import StandardButton from '../buttons/StandardButton'
import useInvestmentProjects from '../../hooks/useInvestmentProjects'

const StockInvestmentCard = ({
  toggleIsOpen,
  setContent,
  data = null,
  index,
}) => {
  const {
    data: investmentProjects,
    isLoading,
    error,
  } = useInvestmentProjects(data?.id)

  return data ? (
    <Disclosure>
      <Disclosure.Button
        as="div"
        className={clsx(
          'col-span-3 p-4 space-y-4 rounded-md xl:p-6 cursor-pointer ',
          index % 3 === 0
            ? 'bg-purple-100'
            : index % 3 === 1
            ? 'bg-yellow-100'
            : 'bg-pink-100'
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
            <h3 className="text-2xl text-gray-800">{data.title}</h3>
          </div>
          <p className="text-lg">{data.description}</p>
          <StandardButton
            classNames={[
              index % 3 === 0
                ? 'bg-purple-700'
                : index % 3 === 1
                ? 'bg-yellow-700'
                : 'bg-pink-700',
              index % 3 === 0
                ? 'hover:bg-purple-600'
                : index % 3 === 1
                ? 'hover:bg-yellow-600'
                : 'hover:bg-pink-600',
              index % 3 === 0
                ? 'focus-visible:ring-purple-500'
                : index % 3 === 1
                ? 'focus-visible:ring-yellow-500'
                : 'focus-visible:ring-pink-500',
            ]}
          >
            Explore
          </StandardButton>
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className={clsx('col-span-3')}>
        <div className="grid grid-cols-3 gap-4 xl:gap-8">
          {investmentProjects
            ? investmentProjects.map((item) => {
                return (
                  <StockTypeCard
                    key={item.id}
                    name={item.title}
                    imgUrl={item.icon}
                    price={item.basePrice}
                    change="+6%"
                    roi={`+${item.finalROI}%`}
                    setContent={setContent}
                    toggleIsOpen={toggleIsOpen}
                  />
                )
              })
            : null}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  ) : null
}

export default StockInvestmentCard
