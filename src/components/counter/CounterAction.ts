import { createAction } from "redux-actions";

export enum CounterActionType {
  INCREMENT = "INCREMENT",
  INCREMENT_IF_ODD = "INCREMENT_IF_ODD",
  DECREMENT = "DECREMENT",
  INCREMENT_ASYNC = "INCREMENT_ASYNC",
}

export const increment = createAction(CounterActionType.INCREMENT);
export const incrementIfOdd = createAction(CounterActionType.INCREMENT_IF_ODD);
export const decrement = createAction(CounterActionType.DECREMENT);
export const incrementAsync = createAction(CounterActionType.INCREMENT_ASYNC);
