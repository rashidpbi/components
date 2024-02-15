import useCounter from '../context/useCounter';
import Button from '../components/Button';


function CounterPage({initialState}) {
    const {count,onClick}= useCounter(initialState)

  return (
    <div>
      value of count is {count}
      <Button onClick={onClick}>click me</Button>
    </div>
  )
}

export default CounterPage
