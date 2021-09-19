// store.js

import { createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunk from 'redux-thunk'

const initialState = {
  user: {},
  userInvestments: [],
  investmentTypes: [],
  investmentProjects: [],
}
// create your reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// create a makeStore function
const makeStore = (context) => createStore(reducer, applyMiddleware(thunk))

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true })
