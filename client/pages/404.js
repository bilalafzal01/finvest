import * as React from 'react'
import { RiAlarmWarningFill } from 'react-icons/ri'

import Seo from '../components/Seo'

function NotFoundPage() {
  return (
    <>
      <Seo templateTitle="Not Found" />

      <main>
        <section className="bg-dark">
          <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-800 layout">
            <RiAlarmWarningFill
              size={60}
              className="text-yellow-300 animate-flicker drop-shadow-glow"
            />
            <h1 className="mt-8">Page Not Found</h1>
          </div>
        </section>
      </main>
    </>
  )
}

NotFoundPage.layout = 'L2'

export default NotFoundPage
