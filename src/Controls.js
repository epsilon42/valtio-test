import { state, increaseCount, setUserName } from "./state";
import { useSnapshot } from "valtio";

const ChangeCount = () => {
  return (
    <div>
      <button onClick={increaseCount}>Counter +1</button>
    </div>
  );
};

const ChangeUserName = () => {
  const snap = useSnapshot(state);
  return (
    <div>
      <input
        value={snap.userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};

export const Controls = () => {
  return (
    <div>
      <ChangeCount />
      <ChangeUserName />
    </div>
  );
};
