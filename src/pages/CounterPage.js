import Panel from '../components/Panel'
import Button from '../components/Button';
import { useReducer } from 'react';



function CounterPage({ initialState }) {
// const [count,setCount] = useState(initialState);
// const [ valueToAdd,setValueToAdd] = useState(0)
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  SUBMIT:"submit",
  CHANGE:"value-change",
}
function reducer(state,action){
switch (action.type) {
case  ACTIONS.INCREMENT:
  return {
   ...state,
   count:state.count + 1
  }
case  ACTIONS.DECREMENT:
  return {
    ...state,
    count: state.count - 1
  }
case  "value-change":
  return {
    ...state,
    valueToAdd: action.payload
  }
case  "submit":
  return {
    ...state,
    count: state.count +  state.valueToAdd,
    valueToAdd: 0,
  }

  
  default: 
  return state;
}

}
const [state,dispatch] = useReducer(reducer,{
  count: 0,
  valueToAdd:initialState,
})
const onIncrement = ()=>{
  // setCount(count + 1)
  dispatch({
    type:  ACTIONS.INCREMENT
  });
}
const onDecrement = ()=>{
  dispatch({
    type:  ACTIONS.DECREMENT
  });
}

const handleSubmit = (e)=>{
e.preventDefault();
dispatch({
  type:  ACTIONS.SUBMIT
});


}
const handleChange = (e)=>{
  const value = parseInt(e.target.value) ||0;
  dispatch({
    type:  ACTIONS.CHANGE,
    payload: value
  });
//  setValueToAdd(value);

}
  return (
    <Panel className="m-3">
      <h1 className="text-lg">value of count is {state.count}</h1>
      
      <div className="flex flex-row">
        <Button onClick={onIncrement}>Increment</Button>
        <Button onClick={onDecrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label >Add a lot!</label><br />
        <input className='p-1 m-3 bg-gray-50 border border-gray-300'  value={state.valueToAdd || ''} onChange={handleChange}  type="number"/><br /><br />
        <Button>Add it</Button>
        
      </form>
    </Panel>
  );
}


export default CounterPage
