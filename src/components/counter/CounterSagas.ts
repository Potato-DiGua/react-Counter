import { put, takeEvery, all, delay } from "redux-saga/effects";
import { CounterActionType, increment } from "./CounterAction";

function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}
function* watchIncrementAsync() {
  yield takeEvery(CounterActionType.INCREMENT_ASYNC, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* counterSaga() {
  yield all([watchIncrementAsync()]);
}
