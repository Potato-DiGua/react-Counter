import { CounterActionType } from "./CounterAction";
import { handleActions } from "redux-actions";

export interface IState {
  count: number;
}
const defaultState: IState = {
  count: 0,
};
export default handleActions(
  {
    [CounterActionType.INCREMENT]: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    [CounterActionType.INCREMENT_IF_ODD]: (state, action) => {
      return {
        ...state,
        count: state.count % 2 !== 0 ? state.count + 1 : state.count,
      };
    },
    [CounterActionType.DECREMENT]: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
  },
  defaultState
);
