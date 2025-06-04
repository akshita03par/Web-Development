import { useState } from "react";

function init(){
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  // let count = 0;

  // function incCount(){
  //     count += 1;
  //     console.log(count); ----> these method not rerender so we use STATE

  // let [stateVariable ,setStateVariable] = useState(0);

  let [count, setCount] = useState(init); //initialization

  let incCount = () => {
     setCount(count + 1);

    // setCount((currCount) => {
    //   return currCount + 1;
    // });
    // setCount((currCount) => {
    //   return currCount + 1;
    // });-----------------------> callback (depend on current value)



    // console.log(count);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
