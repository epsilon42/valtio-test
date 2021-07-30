import React, { useState } from "react";
import { ToggleShowTestsButton } from "./ToggleShowTestsButton";
import { ValtioStateTest } from "./ValtioStateTest";
import { ReactStateTest } from "./ReactStateTest";
import "./App.css";

const App = () => {
  const [showTests, setShowTests] = useState(false);
  return (
    <div class="App">
      <ToggleShowTestsButton
        showTests={showTests}
        setShowTests={setShowTests}
      />
      {showTests ? <ValtioStateTest /> : null}
      {showTests ? <ReactStateTest /> : null}
    </div>
  );
};

export default App;
