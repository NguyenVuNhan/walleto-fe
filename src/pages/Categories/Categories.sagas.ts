import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  deleteCategory,
  DeleteCategoryRes,
  getCategories,
  GetCategoriesRes,
} from "src/apis/category";
import * as actions from "./Categories.actions";
import * as types from "./Categories.types";
import { addCategorySaga } from "./components/CategoryModal";

function* onGetCategories(_: types.GetCategoriesAction) {
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

function* onDeleteCategory({ payload }: types.DeleteCategoryAction) {
  yield put(actions.deleteCategoryRequest());
  try {
    const res: DeleteCategoryRes = yield call(deleteCategory, payload);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.deleteCategoryFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.deleteCategorySuccess(res.data));
    yield put(actions.getCategories());
  } catch (err) {
    yield put(actions.deleteCategoryFailure(err.response.data.data));
  }
}

export default function* categoriesSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    takeEvery(types.GET_CATEGORIES, onGetCategories),
    takeEvery(types.DELETE_CATEGORY, onDeleteCategory),
    fork(addCategorySaga),
  ]);
}
