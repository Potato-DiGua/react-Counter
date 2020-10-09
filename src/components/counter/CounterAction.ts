export enum CounterActionType {
  INCREMENT = "INCREMENT",
  INCREMENT_IF_ODD = "INCREMENT_IF_ODD",
  DECREMENT = "DECREMENT",
  INCREMENT_ASYNC = "INCREMENT_ASYNC",
}
export interface CounterAction {
  type: CounterActionType;
}

export function action(_action: CounterActionType): CounterAction {
  return { type: _action };
}
