import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { PlusCircle, XCircle } from '../../../ui/svg/svg';
import { changeRecipe, resetIsReady } from '../../../../store/actions/recipesActions';
import { Link } from 'react-router-dom';
import styles from './Recipe.module.scss';

class ChangeRecipe extends Component {
  state = this.props.recipeDetails;

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState === null) {
      const recipeDetailsCopy = JSON.parse(JSON.stringify(this.props.recipeDetails));
      this.setState(recipeDetailsCopy);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeRecipe(this.state, this.props.recipeId);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleDeleteIngredient = () => {
    const newIngredients = [...this.state.ingredients];
    newIngredients.pop();
    this.setState({ ingredients: newIngredients });
  };

  handleIngredientChange = (e, index) => {
    const nameOrCount = e.target.placeholder === 'Ingredient' ? 'name' : 'count';
    const value = e.target.value;

    const ingredientsCopy = [...this.state.ingredients];
    const ingredientCopy = { ...ingredientsCopy[index] };
    ingredientCopy[nameOrCount] = value;
    ingredientsCopy[index] = ingredientCopy;

    this.setState({ ingredients: ingredientsCopy });
  };

  handleAddIngredient = () => {
    const index = this.state.ingredients.length + 1;
    const newIngredient = {
      idName: `ingredientName${index}`,
      idCount: `ingredientCount${index}`,
      name: '',
      count: '',
    };
    const newIngredients = [...this.state.ingredients];
    newIngredients.push(newIngredient);
    this.setState({ ingredients: newIngredients });
  };

  handleDeleteStep = () => {
    const newSteps = [...this.state.steps];
    newSteps.pop();
    this.setState({ steps: newSteps });
  };

  handleAddStep = () => {
    const index = this.state.steps.length + 1;
    const newStep = {
      idBody: `stepBody${index}`,
      body: '',
    };
    const newSteps = [...this.state.steps];
    newSteps.push(newStep);
    this.setState({ steps: newSteps });
  };

  handleStepChange = (e, index) => {
    const value = e.target.value;

    const stepsCopy = [...this.state.steps];
    const stepCopy = { ...stepsCopy[index] };
    stepCopy.body = value;
    stepsCopy[index] = stepCopy;

    this.setState({ steps: stepsCopy });
  };

  handleBackToRecipesClick = () => {
    this.props.resetIsReady();
  };

  render() {
    if (this.props.recipeDetails) {
      return (
        <div className={`container mt-4 pt-5 text-center ${styles.block}`}>
          <form onSubmit={this.handleSubmit}>
            {this.props.isReady ? (
              <div className="d-flex justify-content-center">
                <div className={`card mb-3 ${styles.modalSuccess}`} style={{ maxWidth: '20rem' }}>
                  <div className="card-body">
                    <h3 className="card-title">Successfully!</h3>
                    <p className="card-text">Recipe has already been changed.</p>
                    <Link to={`/recipes/${this.state.recipeFor}`}>
                      <button onClick={this.handleBackToRecipesClick} className="btn">
                        Back to recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pb-4">
                <h3 className={`mb-3 ${styles.makeChanges}`}>Making changes...</h3>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className={`form-control ${styles.input}`}
                    id="title"
                    placeholder="Title"
                    value={this.state ? this.state.title : ''}
                    autoComplete="off"
                  />
                  {this.props.isTitleEmpty ? (
                    <p className={`text-left lead py-2 ${styles.errMessage}`}>
                      Title can't be empty
                    </p>
                  ) : null}
                </div>

                <h4 className={`${styles.label} pt-3`}>Ingredients</h4>

                {this.state &&
                  this.state.ingredients.map((ingredient, index, array) => {
                    const { idName, idCount } = ingredient;
                    return (
                      <div key={idName} className="form-row align-items-center">
                        <div className="form-group col-6">
                          <input
                            onChange={e => this.handleIngredientChange(e, index)}
                            type="text"
                            className={`form-control ${styles.input}`}
                            id={idName}
                            placeholder="Ingredient"
                            value={ingredient.name}
                            autoComplete="off"
                          />
                        </div>

                        <div className="form-group col-4">
                          <input
                            onChange={e => this.handleIngredientChange(e, index)}
                            type="text"
                            className={`form-control ${styles.input}`}
                            id={idCount}
                            placeholder="Amount"
                            value={ingredient.count}
                            autoComplete="off"
                          />
                        </div>

                        <div
                          onClick={this.handleDeleteIngredient}
                          className={`form-group col-2 ${styles.plus}`}
                        >
                          {index + 1 === array.length && index !== 0 ? <XCircle /> : null}
                        </div>
                      </div>
                    );
                  })}

                {this.props.isSomeOfIngredientsEmpty ? (
                  <p className={`lead text-left py-2 ${styles.errMessage}`}>
                    All ingredients must be completed
                  </p>
                ) : null}

                <div className={`form-row align-items-center ${styles.addP}`}>
                  <p className="lead mb-0 col-8">Add ingredient</p>
                  <p className="mb-0" onClick={this.handleAddIngredient}>
                    <PlusCircle />
                  </p>
                </div>

                <h4 className={`${styles.label} pt-4`}>Steps</h4>

                {this.state &&
                  this.state.steps.map((step, index, array) => {
                    const { idBody } = step;
                    return (
                      <div key={idBody} className="form-row align-items-center">
                        <div className={`form-group col-1 ${styles.number}`}>{index + 1}</div>

                        <div className="form-group col-9">
                          <textarea
                            onChange={e => this.handleStepChange(e, index)}
                            className={`form-control ${styles.textarea}`}
                            id={idBody}
                            placeholder="Body"
                            value={step.body}
                          />
                        </div>

                        <div
                          onClick={this.handleDeleteStep}
                          className={`form-group col-2 ${styles.plus}`}
                        >
                          {index + 1 === array.length && index !== 0 ? <XCircle /> : null}
                        </div>
                      </div>
                    );
                  })}

                {this.props.isSomeOfStepsEmpty ? (
                  <p className={`text-left lead py-2 ${styles.errMessage}`}>
                    All steps must be completed
                  </p>
                ) : null}

                <div className={`form-row align-items-center ${styles.addP}`}>
                  <p className="lead mb-0 col-8">Add step</p>
                  <p className="mb-0" onClick={this.handleAddStep}>
                    <PlusCircle />
                  </p>
                </div>

                <button
                  className={`btn btn-lg mt-4 font-weight-bolder ${styles.button}`}
                  type="submit"
                >
                  Save changes
                </button>
              </div>
            )}
          </form>
        </div>
      );
    } else {
      return (
        <div className={`container mt-4 pt-5 ${styles.block}`}>
          <p className={`lead text-center ${styles.loadingP}`}>Loading recipe...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  const userId = state.firebase.auth.uid;
  const recipeId = ownProps.match.params.recipeId;
  const collection = `recipes/${category}/${userId}`;
  const recipesForCategory = state.firestore.data[collection];
  const recipeDetails = recipesForCategory ? recipesForCategory[recipeId] : null;
  return {
    collection: collection,
    recipeDetails: recipeDetails,
    recipeId: recipeId,
    isTitleEmpty: state.recipes.isTitleEmpty,
    isSomeOfStepsEmpty: state.recipes.isSomeOfStepsEmpty,
    isSomeOfIngredientsEmpty: state.recipes.isSomeOfIngredientsEmpty,
    isReady: state.recipes.isReady,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeRecipe: (recipe, recipeId) => dispatch(changeRecipe(recipe, recipeId)),
    resetIsReady: () => dispatch(resetIsReady()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [{ collection: props.collection }])
)(ChangeRecipe);
