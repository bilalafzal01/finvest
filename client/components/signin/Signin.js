import Link from 'next/link'
import React, { useState } from 'react'
import axiosInstance from '../../@axios'
import { router } from 'next/router'
import StandardButton from '../buttons/StandardButton'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
    console.log('in consle')
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      email: email,
      password: password,
    }
    if (email !== '' && password != '') {
      const url = `/api/users/signin`
      await axiosInstance.post(url, payload).then((res) => {
        localStorage.setItem('userId', res.data.id)
      })
      if (process.browser) {
        window.location.href = '/'
      }
    }
  }

  return (
    <div>
      <nav
        className={
          'bg-gradient-to-br from-gray-700 via-gray-900 to-black col-span-4 lg:col-span-6 z-10 px-10 xl:px-20 2xl:px-40 relative top-0 bg-white'
        }
      >
        <ul className="flex items-center justify-between px-8 py-6">
          {/* Left Brand */}
          <li className="cursor-pointer">
            <img src="/finvestLogo.svg" alt="finvest" width="85%" />
          </li>
          {/* Right Links */}
          <li>
            <ul className="flex items-center justify-between xl:space-x-4 lg:space-x-1">
              <li className="flex items-center px-4 py-2 rounded-full">
                <li>
                  <StandardButton
                    onClick={() => {
                      window.location.href = '/signin'
                    }}
                  >
                    Sign in
                  </StandardButton>
                </li>
                <StandardButton
                  onClick={() => {
                    window.location.href = '/signup'
                  }}
                  classNames={[
                    'bg-purple-700',
                    'hover:bg-purple-600',
                    'focus-visible:ring-purple-500',
                  ]}
                >
                  Sign up
                </StandardButton>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 mt-24 ">
        <div className="z-10 col-span-1 px-10 ml-6 lg:col-span-1 xl:px-20 2xl:px-40">
          <p className="text-5xl font-poppins">
            {' '}
            <span className="text-purple-700">Investing</span> has never been so
            easy!
          </p>
          <p className="w-64 mt-8 mb-8 text-lg text-gray-600">
            {' '}
            If you don't have an account, you can register here:{' '}
          </p>
          <a
            href="/signup"
            className="p-2 px-8 py-2 mt-2 mr-12 text-xl font-medium text-white bg-purple-700 rounded-md w-80"
          >
            Register Here
          </a>
        </div>
        <div className="grid col-span-1">
          <div className="grid justify-center mb-8">
            <p className="mr-8 text-4xl font-semibold text-gray-800">Log In</p>
          </div>
          <div className="grid col-span-1 ml-12">
            <form onSubmit={handleSubmit}>
              <label
                className="mb-2 ml-8 text-xl"
                style={{ color: '#595959', display: 'block' }}
              >
                E-mail
              </label>
              <input
                className="w-[90%] p-2 px-4 mb-4 ml-8 text-xl bg-gray-100 border-2 border-gray-200 rounded-lg "
                type="text"
                placeholder="Email"
                onChange={handleChangeEmail}
              ></input>
              <label
                className="mb-2 ml-8 text-xl"
                style={{ color: '#595959', display: 'block' }}
              >
                Password
              </label>
              <input
                className="w-[90%] p-2 px-4 mb-4 ml-8 text-xl bg-gray-100 border-2 border-gray-200 rounded-lg "
                type="password"
                placeholder="Password"
                onChange={handleChangePassword}
              ></input>
              <div className="grid justify-center">
                <button
                  href="/signup"
                  className="p-2 px-8 py-2 mt-4 mr-12 text-xl font-medium text-white bg-purple-700 rounded-md w-80"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img className="ml-10" src="image 5.svg"></img>
    </div>
  )
}

export default Signin
