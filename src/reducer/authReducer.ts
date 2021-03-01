const initialState = {
  authenticated: false,
};

const authReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case "success":
      return { ...state, authenticated: true };
    default:
      return state;
  }
};

export default authReducer;
