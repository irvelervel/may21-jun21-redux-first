// the reducer is a PURE FUNCTION
// with the same input it will ALWAYS output the same result
// in a pure function we don't deal with async/await, fetch, databases

// this are ACTIONS, simple JS OBJECTS
// {
//     type: 'INCREMENT'
// }
// {
//     type: 'INCREMENT',
//     payload: 5
// }

import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
  // every action is just a JS object, with a mandatory type property
  switch (action.type) {
    // we're going to deal with two action types: INCREMENT and DECREMENT
    case 'INCREMENT':
      return {
        // from every case of your reducer we'll need to return the new redux state object
        // here we need to increment our count variable
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      console.log('I fell into default!')
      return state
    // every reducer function you're gonna write is going to default returning the state as is
  }
}
