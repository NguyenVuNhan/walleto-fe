import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  addCategory,
  AddCategoryRes,
  updateCategory,
  UpdateCategoryRes,
} from "src/apis/category";
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

function* onUpdateCategory({
  payload: { id, data },
  callback,
}: types.UpdateCategoryAction) {
  yield put(actions.updateCategoryRequest());
  try {
    const res: UpdateCategoryRes = yield call(updateCategory, id, data);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.updateCategoryFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.updateCategorySuccess(res.data));
    yield put(getCategories());
    callback && callback("success");
  } catch (err) {
    yield put(actions.updateCategoryFailure(err.response.data.data));
    callback && callback("error");
  }
}

export default function* addCategorySaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    takeEvery(types.ADD_CATEGORY, onAddCategory),
    takeEvery(types.UPDATE_CATEGORY, onUpdateCategory),
  ]);
}
