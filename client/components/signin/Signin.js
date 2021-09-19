import Link from 'next/link'
import React, { useState } from 'react'
import axiosInstance from '../../@axios'
import { router } from 'next/router'

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
          'col-span-4 lg:col-span-6 z-10 px-10 xl:px-20 2xl:px-40 relative top-0 bg-white'
        }
      >
        <ul className="flex items-center justify-between px-8 py-6">
          {/* Left Brand */}
          <li>
            <h1 className="p-0 m-0 text-3xl">
              <Link href="/">
                <a className="transition ease-in-out duration-250 dark:text-gray-100 dark:hover:text-primary-300">
                  {'Finvest'}
                </a>
              </Link>
            </h1>
          </li>
          {/* Right Links */}
          <li>
            <ul className="flex items-center justify-between xl:space-x-4 lg:space-x-1">
              <li className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
                <a
                  className="px-4 py-2 mr-2 rounded-3xl"
                  href="/signin"
                  style={{ color: 'white', backgroundColor: '#6D28D9' }}
                >
                  {' '}
                  Sign In{' '}
                </a>
              </li>
              <li>
                <a href="/signup" style={{ color: '#595959' }}>
                  {' '}
                  Sign Up{' '}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 mt-24 ">
        <div className="z-10 col-span-1 px-10 ml-6 lg:col-span-1 xl:px-20 2xl:px-40">
          <p className="text-6xl" style={{ color: '#595959' }}>
            {' '}
            <span style={{ color: '#6D28D9' }}>Investing</span> has never been
            so easy!
          </p>
          <p
            className="w-64 mt-8 mb-8 text-lg font-light"
            style={{ color: '#595959' }}
          >
            {' '}
            If you don't have an account, you can register here:{' '}
          </p>
          <a
            href="/signup"
            className="p-2 px-8 py-2 text-2xl font-light rounded-3xl"
            style={{ backgroundColor: '#6D28D9', color: 'white' }}
          >
            Register Here
          </a>
        </div>
        <div className="grid col-span-1">
          <div className="grid justify-center mb-8">
            <p className="mr-8 text-4xl" style={{ color: '#595959' }}>
              Log In
            </p>
          </div>
          <div className="grid col-span-1 ml-12">
            <form onSubmit={handleSubmit}>
              <label
                className="mb-2 ml-8 text-xl font-light"
                style={{ color: '#595959', display: 'block' }}
              >
                E-mail
              </label>
              <input
                className="w-3/4 p-2 mb-4 ml-8 text-2xl rounded-lg font-extralight"
                style={{ border: '1px solid gray' }}
                type="text"
                onChange={handleChangeEmail}
              ></input>
              <label
                className="ml-8 text-xl font-light"
                style={{ color: '#595959', display: 'block' }}
              >
                Password
              </label>
              <input
                className="w-3/4 mb-4 ml-8 text-4xl rounded-lg"
                style={{ border: '1px solid gray' }}
                type="password"
                onChange={handleChangePassword}
              ></input>
              <div className="grid justify-center">
                <button
                  href="/signup"
                  className="p-2 px-8 py-2 mt-2 mr-12 text-2xl font-light rounded-3xl w-80"
                  style={{ backgroundColor: '#6D28D9', color: 'white' }}
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
