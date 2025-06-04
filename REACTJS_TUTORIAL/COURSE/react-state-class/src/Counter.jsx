import { useState } from "react";

export default function Counter() {
  // let count = 0;

  // function incCount(){
  //     count += 1;
  //     console.log(count); ----> these method not rerender so we use STATE

  // let [stateVariable ,setStateVariable] = useState(0);

  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount(count + 1);

    // console.log(count);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
