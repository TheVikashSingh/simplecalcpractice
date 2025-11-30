import { useState } from 'react'

function App() {
const [num1, setNum1] = useState();
const [num2, setNum2] = useState();
const [result, setResult] = useState();

function num1Change(inputValue){
  setNum1(inputValue);
}

function num2Change(inputValue){
  setNum2(inputValue);
}

function addTwoNums(){
setResult(Number(num1)+Number(num2));
}

function substractTwoNums(){
setResult(Number(num1)-Number(num2));
}

function multiplyTwoNums(){
setResult(Number(num1)*Number(num2));
}

function divideTwoNums(){
setResult(Number(num1)/Number(num2));
}

  return (
    <>
    <div className='main-div'>
    <input placeholder='Enter Number...' value={num1} 
    onChange={e => num1Change(e.target.value)}
    className='all-elements'
    style={{background:"teal", color:"white", fontWeight:"bold"}}/>

    <select className='all-elements'>
      <option></option>
      <option onClick={addTwoNums}>+</option>
      <option onClick={substractTwoNums}>-</option>
      <option onClick={multiplyTwoNums}>x</option>
      <option onClick={divideTwoNums}>/</option>
    </select>

    <input placeholder='Enter Another Number...' 
    value={num2} onChange={e => num2Change(e.target.value)}
    className='all-elements'
     style={{background:"teal", color:"white",  fontWeight:"bold"}}/>

    <span className='all-elements'> = </span>

    <label className='all-elements'> {result} </label>
    </div>
    </>
  )
}

export default App
