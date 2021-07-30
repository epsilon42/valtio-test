import { proxy } from "valtio";

const initialState = { count: 0, userName: "Default userName" };

export const state = proxy(initialState);

// Actions
export const increaseCount = () => {
  ++state.count;
};
export const setUserName = (userName) => {
  state.userName = userName;
};
