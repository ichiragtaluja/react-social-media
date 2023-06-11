export const initial = [{ allUsers: [] }];

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};
