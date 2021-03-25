import { forwardTo } from "src/helpers/router";
import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import { addCategory, AddCategoryRes } from "src/apis/category";
import * as actions from "./CategoryModal.actions";
import * as types from "./CategoryModal.types";

function* onAddCategory({ payload }: types.AddCategoryAction) {
  yield put(actions.addCategoryRequest());
  try {
    const res: AddCategoryRes = yield call(addCategory, payload);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.addCategoryFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.addCategorySuccess(res.data));
    forwardTo("/categories");
  } catch (err) {
    yield put(actions.addCategoryFailure(err.response.data.data));
  }
}

function* watchOnAddCategory() {
  yield takeEvery(types.ADD_CATEGORY, onAddCategory);
}

export default function* addCategorySaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnAddCategory)]);
}
