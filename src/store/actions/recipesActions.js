export const createRecipe = recipe => {
  return (dispatch, getState, { getFirestore }) => {
    const [isTitleEmpty, isSomeOfStepsEmpty, isSomeOfIngredientsEmpty] = validateRecipe(
      recipe.title,
      recipe.steps,
      recipe.ingredients
    );

    if (isTitleEmpty || isSomeOfStepsEmpty || isSomeOfIngredientsEmpty) {
      dispatch({
        type: 'INVALID_RECIPE',
        isTitleEmpty,
        isSomeOfStepsEmpty,
        isSomeOfIngredientsEmpty,
      });
    } else {
      dispatch({ type: 'VALID_RECIPE' });
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;

      firestore
        .collection(`recipes/${recipe.recipeFor}/${userId}`)
        .add({
          ...recipe,
          createdAt: new Date(),
        })
        .then(() => {
          dispatch({ type: 'CREATE_RECIPE_SUCCESS', recipe });
        })
        .catch(err => {
          dispatch({ type: 'CREATE_RECIPE_ERROR', err });
        });
    }
  };
};

export const resetIsReady = () => {
  return dispatch => {
    dispatch({ type: 'RESET_IS_READY' });
  };
};

export const changeRecipe = (recipe, recipeId) => {
  return (dispatch, getState, { getFirestore }) => {
    const [isTitleEmpty, isSomeOfStepsEmpty, isSomeOfIngredientsEmpty] = validateRecipe(
      recipe.title,
      recipe.steps,
      recipe.ingredients
    );

    if (isTitleEmpty || isSomeOfStepsEmpty || isSomeOfIngredientsEmpty) {
      dispatch({
        type: 'INVALID_RECIPE',
        isTitleEmpty,
        isSomeOfStepsEmpty,
        isSomeOfIngredientsEmpty,
      });
    } else {
      dispatch({ type: 'VALID_RECIPE' });
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;

      firestore
        .collection(`recipes/${recipe.recipeFor}/${userId}`)
        .doc(recipeId)
        .update({
          ...recipe,
          updatedAt: new Date(),
        })
        .then(() => {
          dispatch({ type: 'CHANGE_RECIPE_SUCCESS', recipe });
        })
        .catch(err => {
          dispatch({ type: 'CHANGE_RECIPE_ERROR', err });
        });
    }
  };
};

export const deleteRecipe = (recipe, recipeId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection(`recipes/${recipe.recipeFor}/${userId}`)
      .doc(recipeId)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_RECIPE_SUCCESS', recipe });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_RECIPE_ERROR', err });
      });
  };
};

function validateRecipe(title, steps, ingredients) {
  const isTitleEmpty = !title;
  let isSomeOfStepsEmpty;
  let isSomeOfIngredientsEmpty;
  for (const step of steps) {
    if (!step.body) {
      isSomeOfStepsEmpty = true;
      break;
    } else {
      isSomeOfStepsEmpty = false;
    }
  }
  for (const ingredient of ingredients) {
    if (!ingredient.name) {
      isSomeOfIngredientsEmpty = true;
      break;
    } else {
      isSomeOfIngredientsEmpty = false;
    }
  }
  return [isTitleEmpty, isSomeOfStepsEmpty, isSomeOfIngredientsEmpty];
}
