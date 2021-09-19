import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { VscChromeMinimize, VscAdd } from 'react-icons/vsc'
import axios from '../../@axios'
import useUser from './../../hooks/useUser'

function EasyInvestModal({
  isOpen,
  toggleIsOpen,
  content = { name: 'Tesla' },
}) {
  const [userShare, setUserShare] = useState(10000)

  const incrementUserShare = () => {
    if (userShare + 5000 < 1000000) {
      setUserShare(userShare + 5000)
    } else {
      setUserShare(10000)
    }
  }

  const decrementUserShare = () => {
    if (userShare - 5000 > 10000) {
      setUserShare(userShare - 5000)
    } else {
      setUserShare(10000)
    }
  }

  if (process.browser) {
    var { user, isLoading, error } = useUser(localStorage.getItem('userId'))
  }

  const confirmPayment = async () => {
    const data = await postData()
    if (data) {
      window.location.reload()
    }
  }

  const postData = async () => {
    if (userShare <= user?.credit) {
      const res = await axios.post(`/api/easyinvestment/create`, {
        userId: user.id,
        amount: userShare,
      })
      toggleIsOpen()
      return res.data
    } else {
      return null
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={toggleIsOpen}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Easy investment by JSBank
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Enter amount of money you want to invest, experts at JS Bank
                  will take care of the rest.
                </p>
              </div>
              {/* set percentage */}
              <div className="flex items-center justify-center mt-4 space-x-4">
                <button
                  className="self-end p-1 bg-gray-200 rounded-lg"
                  onClick={decrementUserShare}
                >
                  <VscChromeMinimize size={15} />
                </button>
                <h3 className="text-2xl font-medium text-gray-800">
                  Rs. {userShare}
                </h3>
                <button
                  className="self-end p-1 bg-gray-200 rounded-lg"
                  onClick={incrementUserShare}
                >
                  <VscAdd size={15} />
                </button>
              </div>

              <div className="flex items-center justify-center mt-8">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={confirmPayment}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default EasyInvestModal
