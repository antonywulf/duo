const initState = {
  isTitleEmpty: null,
  isSomeOfStepsEmpty: null,
  isSomeOfIngredientsEmpty: null,
  isReady: false,
};

const recipesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE_SUCCESS':
      console.log('created recipe', action.recipe);
      return { ...state, isReady: true };
    case 'CREATE_RECIPE_ERROR':
      console.log('created recipe error', action.err);
      return state;
    case 'CHANGE_RECIPE_SUCCESS':
      console.log('changed recipe', action.recipe);
      return { ...state, isReady: true };
    case 'CHANGE_RECIPE_ERROR':
      console.log('changed recipe error', action.err);
      return state;
    case 'DELETE_RECIPE_SUCCESS':
      console.log('delete recipe', action.recipe);
      return state;
    case 'DELETE_RECIPE_ERROR':
      console.log('delete recipe error', action.err);
      return state;
    case 'INVALID_RECIPE':
      return {
        ...state,
        isTitleEmpty: action.isTitleEmpty,
        isSomeOfStepsEmpty: action.isSomeOfStepsEmpty,
        isSomeOfIngredientsEmpty: action.isSomeOfIngredientsEmpty,
      };
    case 'VALID_RECIPE':
      console.log('VALID_RECIPE');
      return {
        ...state,
        isTitleEmpty: null,
        isSomeOfStepsEmpty: null,
        isSomeOfIngredientsEmpty: null,
      };
    case 'RESET_IS_READY':
      return {
        ...state,
        isReady: false,
      };
    default:
      return state;
  }
};

export default recipesReducer;
