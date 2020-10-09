import React from "react";

export interface CounterState {}
export interface CounterProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
  onIncrementIfOdd: () => void;
  value: number;
}

export default class Counter extends React.Component<
  CounterProps,
  CounterState
> {
  public render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>Increment</button>{" "}
        <button onClick={this.props.onDecrement}>Decrement</button>{" "}
        <button onClick={this.props.onIncrementIfOdd}>Increment If Odd</button>{" "}
        <button onClick={this.props.onIncrementAsync}>
          Increment after 1 second
        </button>
        <hr />
        <div>Clicked: {this.props.value} times</div>
      </div>
    );
  }
}
