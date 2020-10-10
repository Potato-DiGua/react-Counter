import Counter from "../components/counter/Counter";
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
} from "../components/counter/CounterAction";
import { connect } from "react-redux";
import { IState } from "../components/counter/CounterReducer";

function mapStateToProps(state: IState) {
  return {
    value: state.count,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onIncrementIfOdd: () => dispatch(incrementIfOdd()),
    onIncrementAsync: () => dispatch(incrementAsync()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
