export const loggedInUserReducer = (loggedInUserState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...loggedInUserState,...action.payload };

    case "REMOVE_USER":
      return { ...action.payload };

    default:
      return loggedInUserState;
  }
};

export const initial = {};
