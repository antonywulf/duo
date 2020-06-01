const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN_ERROR':
      console.log('sign in error');
      return { ...state, authError: action.err.message };
    case 'SIGN_IN_SUCCESS':
      console.log('sign in success');
      return { ...state, authError: null };
    case 'SIGN_OUT_SUCCESS':
      console.log('sign out success');
      return state;
    case 'SIGN_UP_SUCCESS':
      console.log('sign up success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGN_UP_ERROR':
      console.log('sign up error');
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
