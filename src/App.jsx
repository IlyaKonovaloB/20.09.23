import { useState } from "react";
import "./App.css";


function App() {
  const age = 19;
  return <>
    {age > 18 ? 'more 18' : 'less 18'}
  </>
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
