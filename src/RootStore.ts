import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import counter from "./components/counter/CounterReducer";
import counterSaga from "./components/counter/CounterSagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(counterSaga);

export default store;
