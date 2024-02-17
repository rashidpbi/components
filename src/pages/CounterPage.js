import Panel from '../components/Panel'
import Button from '../components/Button';
import { useState } from 'react';



function CounterPage({ initialState }) {
const [count,setCount] = useState(initialState);
const [ valueToAdd,setValueToAdd] = useState(0)
const onIncrement = ()=>{
  setCount(count + 1)
}
const onDecrement = ()=>{
  setCount(count - 1)
}

const handleSubmit = (e)=>{
e.preventDefault();
setCount(count + valueToAdd)
setValueToAdd(0)

}
const handleChange = (e)=>{
  const value = parseInt(e.target.value) ||0;
  console.log(typeof value)
 setValueToAdd(value);

}
  return (
    <Panel className="m-3">
      <h1 className="text-lg">value of count is {count}</h1>
      
      <div className="flex flex-row">
        <Button onClick={onIncrement}>Increment</Button>
        <Button onClick={onDecrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label >Add a lot!</label><br />
        <input className='p-1 m-3 bg-gray-50 border border-gray-300'  value={valueToAdd || ''} onChange={handleChange}  type="number"/><br /><br />
        <Button>Add it</Button>
        
      </form>
    </Panel>
  );
}


export default CounterPage
