import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import { getCategories, GetCategoriesRes } from "src/apis/category";
import * as actions from "./Categories.actions";
import * as types from "./Categories.types";

function* onCategories(_: types.GetCategoriesAction) {
  yield put(actions.getCategoriesRequest());
  try {
    const res: GetCategoriesRes = yield call(getCategories);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.getCategoriesFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.getCategoriesSuccess(res.data.categories));
  } catch (err) {
    yield put(actions.getCategoriesFailure(err.response.data.data));
  }
}

function* watchOnCategories() {
  yield takeEvery(types.GET_CATEGORIES, onCategories);
}

export default function* categoriesSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnCategories)]);
}
