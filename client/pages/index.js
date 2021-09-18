import * as React from 'react'
import DashboardMain from '../components/dashboard/DashboardMain'
import Seo from '../components/Seo'

function HomePage() {
  return (
    <>
      <Seo templateTitle="Finvest" />
      <section className="h-full xl:p-8 lg:p-4">
        <DashboardMain />
      </section>
    </>
  )
}

HomePage.layout = 'L1'

export default HomePage
