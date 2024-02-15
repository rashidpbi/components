import { useState,useEffect } from "react";
function useCounter(initialState){
  const [count,setCount ] = useState(initialState);
  useEffect(()=>{


  },[count])
  function onClick(){
      setCount(count + 1);
  }
  return (
    {count,
    onClick}
  )
}
export default useCounter;