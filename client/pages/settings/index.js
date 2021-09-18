import React from 'react'

function Settings() {
  return (
    <div class="flex items-center justify-center h-screen bg-gray-200">
      <div class="container">
        <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div class="text-center">
            <h2 class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
              Settings are <span class="text-indigo-600"> Coming Soonn</span>
            </h2>
            <p class="text-md md:text-lg mt-10">
              <a class="hover:underline" href="https://www.quicktoolz.com">
                Finvest
              </a>{' '}
              is a website help you provide simple investing ways for all your
              needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Settings.layout = 'L1'

export default Settings
