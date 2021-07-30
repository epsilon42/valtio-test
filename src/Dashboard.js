import { state } from "./state";
import { useSnapshot } from "valtio";

const Count = () => {
  const snap = useSnapshot(state);
  return <div>Counter: {snap.count}</div>;
};

const UserName = () => {
  const snap = useSnapshot(state);
  return <div>Username: {snap.userName}</div>;
};

export const Dashboard = () => (
  <div>
    <Count />
    <UserName />
  </div>
);
