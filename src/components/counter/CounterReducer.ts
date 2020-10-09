import { CounterActionType, CounterAction } from "./CounterAction";

export default function counter(state: number = 0, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return state + 1;
    case CounterActionType.INCREMENT_IF_ODD:
      return state % 2 !== 0 ? state + 1 : state;
    case CounterActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
