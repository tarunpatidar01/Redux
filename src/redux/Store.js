import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../featchers/counter/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  
})

//step 1: create store
//step 2: wrap app components under provider
//step 3: create slice
// step 4: register reducer in store