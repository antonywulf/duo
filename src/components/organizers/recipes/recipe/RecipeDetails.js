import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { deleteRecipe } from '../../../../store/actions/recipesActions';
import styles from './Recipe.module.scss';

const RecipeDetails = props => {
  const handleOnDeleteButtonClick = () => {
    props.deleteRecipe(recipeDetails, recipeId);
    props.history.push(`/recipes/${props.recipeDetails.recipeFor}`);
  };

  const { recipeDetails, recipeId } = props;
  if (recipeDetails) {
    const { title, ingredients, steps } = recipeDetails;
    return (
      <div className={`container mt-4 pt-5 ${styles.block}`}>
        <h4 className={`text-center mb-3 ${styles.h4}`}>{title}</h4>

        <table className="table text-center table-striped">
          <thead>
            <tr className={`${styles.trMain}`}>
              <th className={`${styles.th}`} scope="col">
                Ingredient
              </th>
              <th className={`${styles.th}`} scope="col">
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="text-italic">
            {ingredients.map(ingredient => {
              const { idName, name, count } = ingredient;
              return (
                <tr key={idName} className={`${styles.tr}`}>
                  <td className={`${styles.td}`}>{name}</td>
                  <td className={`${styles.td}`}>{count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {steps.map((step, index) => {
          return (
            <div key={step.idBody} className="mb-3">
              <p className={`lead ${styles.stepCount}`}>Step {index + 1}</p>
              <div className="container">
                <div className="row">
                  <div className={`col-12 card px-0 ${styles.stepItem}`}>
                    <div className={`card-body ${styles.cardBody}`}>{step.body}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="container pb-4 pt-2">
          <div className="row justify-content-around">
            <Link to={location => ({ ...location, pathname: `${location.pathname}/change` })}>
              <button className={`btn font-weight-bolder ${styles.button}`}>Change recipe</button>
            </Link>
            <button
              data-toggle="modal"
              data-target="#deleteRecipe"
              className={`btn font-weight-bolder ${styles.buttonDelete}`}
            >
              Delete recipe
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="deleteRecipe"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className={`modal-content ${styles.modalDialog}`}>
              <div style={{ borderBottom: 'none' }} className="modal-header">
                <h4 className="modal-title" id="staticBackdropLabel">
                  Are you sure?
                </h4>
                <button
                  type="button"
                  className="close removeOutline"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="lead m-0">This action cannot be changed!</p>
              </div>
              <div
                style={{ borderTop: 'none' }}
                className="modal-footer d-flex justify-content-between"
              >
                <button
                  onClick={handleOnDeleteButtonClick}
                  type="button"
                  className={`btn font-weight-bolder ${styles.buttonDelete}`}
                  data-dismiss="modal"
                >
                  Delete anyway
                </button>
                <button
                  type="button"
                  className={`btn font-weight-bolder ${styles.button}`}
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`container mt-4 pt-5 ${styles.block}`}>
        <p className={`lead text-center ${styles.loadingP}`}>Loading recipe...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  const userId = state.firebase.auth.uid;
  const collection = `recipes/${category}/${userId}`;
  const recipeId = ownProps.match.params.recipeId;
  const recipesForCategory = state.firestore.data[collection];
  const recipeDetails = recipesForCategory ? recipesForCategory[recipeId] : null;
  return {
    collection: collection,
    recipeDetails: recipeDetails,
    recipeId: recipeId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRecipe: (recipe, recipeId) => dispatch(deleteRecipe(recipe, recipeId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [{ collection: `${props.collection}` }])
)(RecipeDetails);
