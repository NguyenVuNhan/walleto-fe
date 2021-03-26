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
import { getCategories } from "../../Categories.actions";

function* onAddCategory({ payload, callback }: types.AddCategoryAction) {
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
    yield put(getCategories());
    callback && callback("success");
  } catch (err) {
    yield put(actions.addCategoryFailure(err.response.data.data));
    callback && callback("error");
  }
}

function* watchOnAddCategory() {
  yield takeEvery(types.ADD_CATEGORY, onAddCategory);
}

export default function* addCategorySaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnAddCategory)]);
}
