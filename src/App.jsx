import { useState } from "react";
import "./App.css";


function App() {
	const arr = [1, 2, 3, 4, 5];
  return <ul>
    <li>{arr[0]}</li>
    <li>{arr[1]}</li>
    <li>{arr[2]}</li>
    <li>{arr[3]}</li>
    <li>{arr[4]}</li>
  </ul>
}

// function App() {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const increment1 = () => {
  //   setCount(count - 1);
  // };
  // return (
  //   <div className="container">
  //     <button className="btn2" onClick={increment}> Кнопка + </button>
  //    <div className="text"> {count} </div>
  //     <button className="btn2" onClick={increment1}> Кнопка - </button>
  //   </div>
  // );
  // }

export default App;
