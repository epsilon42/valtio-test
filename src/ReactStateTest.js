import React, { useState } from "react";

export const ReactStateTest = () => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Default userName");

  return (
    <div>
      <h3>React useState test</h3>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Counter +1</button>
      </div>
      <div>Username: {userName}</div>
      <div>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
    </div>
  );
};
