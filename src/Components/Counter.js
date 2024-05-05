import React, { useEffect, useState } from "react";
import useCustomEffect from "../Hooks/use-custom-effect";

function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

//   useEffect(() => {
    useCustomEffect(() => {
    console.log("effect triggered!");
    // cleanup function
    return () => {
      console.log("cleanup triggered!");
    };
    //case 1 : empty array -> one time render ->   },[]);
    //case 2 : dependency array -> renders only when dependency changes ->   },[count]);
    //case 3 : no array -> every time render ->   });
  },[count]);

  console.log("component rerendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count>=1){
    setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;