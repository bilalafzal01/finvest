import React from 'react'
import useUser from '../../hooks/useUser'
import useUserInvestment from '../../hooks/useUserInvestment'

function PortfolioGrid() {
  if (process.browser) {
    var { user, isLoading, error } = useUser(localStorage.getItem('userId'))
  }
  const {
    data,
    isLoading: investmentsIsLoading,
    error: invesmtsError,
  } = useUserInvestment(user?.id)

  return (
    <div className="grid grid-cols-3 gap-2 pt-4 bg-gray-100 divide-y-2 rounded-md xl:pt-8">
      {/* Asset, invested, profit */}
      <div className="grid grid-cols-3 col-span-3 text-center">
        <h2 className="text-2xl font-medium text-gray-800">Assets</h2>
        <h2 className="text-2xl font-medium text-gray-800">Invested</h2>
        <h2 className="text-2xl font-medium text-gray-800">Profit/Loss</h2>
      </div>
      <div className="col-span-3 py-4 space-y-4 text-xl text-center text-black divide-y-2 font-poppins">
        {data
          ? data.map((item) => {
              console.log(item)
              return (
                <div className="grid grid-cols-3 col-span-3 py-4 text-center">
                  <span>
                    {item.investmentProject ? item.investmentProject.title : ''}
                  </span>
                  <span>Rs. {item.amount}</span>
                  <span>+ {item.roi}%</span>
                </div>
              )
            })
          : null}
      </div>
      {/* rows */}
    </div>
  )
}

export default PortfolioGrid
