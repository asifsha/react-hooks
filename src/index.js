import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  return [count, () => setCount(count + 1), () => setCount(count - 1)];
};

const Counter = () => {
  const [count, increment, decrement] = useCount();

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
