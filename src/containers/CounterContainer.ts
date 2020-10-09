import Counter from "../components/counter/Counter";
import { action, CounterActionType } from "../components/counter/CounterAction";
import { connect } from "react-redux";

function mapStateToProps(state: number) {
  return {
    value: state,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {
    onIncrement: () => dispatch(action(CounterActionType.INCREMENT)),
    onDecrement: () => dispatch(action(CounterActionType.DECREMENT)),
    onIncrementIfOdd: () =>
      dispatch(action(CounterActionType.INCREMENT_IF_ODD)),
    onIncrementAsync: () => dispatch(action(CounterActionType.INCREMENT_ASYNC)),
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Container;
