import React from 'react'
import Seo from '../../components/Seo'
import PortoflioMain from '../../components/portfolio/PortfolioMain'
function Portfolio() {
  return (
    <div>
      <Seo templateTitle="My Portfolio" />
      <section className="h-full xl:p-8 lg:p-4">
        <PortoflioMain />
      </section>
    </div>
  )
}

Portfolio.layout = 'L1'

export default Portfolio
