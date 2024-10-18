
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement,reset,incrementByAmount } from './featchers/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(); 
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
      dispatch(decrement());
  }
  function handleClearClick(){
     dispatch(reset());
  }
  function handleIncClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
   <div className="container">
    <button onClick={handleIncrementClick}>+</button>
    <p>count:{count} </p>
    <button onClick={handleDecrementClick}>-</button><br />
    <button onClick={handleClearClick}>Reset</button><br />

    <input type="number"
    value={amount}
    placeholder='enter AMount'
    onChange={(e)=> setAmount(e.target.value)} />
    <button onClick={handleIncClick}>Inc by Amount</button>
   </div>
    </>
  )
}

export default App
