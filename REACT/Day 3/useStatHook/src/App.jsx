import { useState } from "react";
export default function App(){
  const [ count , setCount ] = useState(0); // useState is the hook. This re-render the function 
  // useState retuern an array of variable when the varible change it re-render the function and the function for the rerender the function.

  function incrementCounter(){
    setCount(count + 1 );
  }

  return (
    <>
    <p style={ { fontSize : "20px"} }>Counter : {count} </p>
    <button onClick={incrementCounter} style={{ color : "red" }}>Increment</button>
    </>
  )
}