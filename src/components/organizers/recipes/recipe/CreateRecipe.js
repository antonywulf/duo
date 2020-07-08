import React, { Component } from 'react';
import { PlusCircle, XCircle } from '../../../ui/svg/svg';
import { createRecipe, resetIsReady } from '../../../../store/actions/recipesActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Recipe.module.scss';

class CreateRecipe extends Component {
  state = {
    recipeFor: '',
    title: '',
    ingredients: [{ idName: 'ingredientName1', idCount: 'ingredientCount1', name: '', count: '' }],
    steps: [{ idBody: 'stepBody1', body: '' }],
  };

  componentDidMount() {
    let fromCategory = 'breakfasts';
    if (this.props.location.state) {
      const prevPath = this.props.location.state.prevPath;
      fromCategory = prevPath.split('/').pop();
    }
    this.setState({ recipeFor: fromCategory });
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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

  handleStepChange = (e, index) => {
    const value = e.target.value;

    const stepsCopy = [...this.state.steps];
    const stepCopy = { ...stepsCopy[index] };
    stepCopy.body = value;
    stepsCopy[index] = stepCopy;

    this.setState({ steps: stepsCopy });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createRecipe(this.state);
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

  handleDeleteIngredient = () => {
    const newIngredients = [...this.state.ingredients];
    newIngredients.pop();
    this.setState({ ingredients: newIngredients });
  };

  handleDeleteStep = () => {
    const newSteps = [...this.state.steps];
    newSteps.pop();
    this.setState({ steps: newSteps });
  };

  handleBackToRecipesClick = () => {
    this.props.resetIsReady();
  };

  render() {
    return (
      <div className={`container mt-4 pt-5 text-center ${styles.block}`}>
        <form onSubmit={this.handleSubmit}>
          {this.props.isReady ? (
            <div className="d-flex justify-content-center">
              <div className={`card mb-3 ${styles.modalSuccess}`} style={{ maxWidth: '20rem' }}>
                <div className="card-body">
                  <h3 className="card-title">Successfully!</h3>
                  <p className="card-text">A new recipe has already been added.</p>
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
              <h4 className={`${styles.label}`}>Choose a category</h4>
              <div className="form-group">
                <select
                  value={this.state.recipeFor}
                  onChange={this.handleChange}
                  id="recipeFor"
                  className={`custom-select ${styles.select}`}
                >
                  <option value="breakfasts">Breakfasts</option>
                  <option value="dinners">The first dish</option>
                  <option value="suppers">The main dish</option>
                  <option value="drinks">Drinks</option>
                  <option value="desserts">Desserts</option>
                  <option value="snacks">Snacks</option>
                  <option value="salads">Salads</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  type="text"
                  className={`form-control ${styles.input}`}
                  id="title"
                  placeholder="Title"
                  autoComplete="off"
                />
                {this.props.isTitleEmpty ? (
                  <p className={`text-left lead py-2 ${styles.errMessage}`}>Title can't be empty</p>
                ) : null}
              </div>

              <h4 className={`${styles.label} pt-3`}>Ingredients</h4>

              {this.state.ingredients.map((ingredient, index, array) => {
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

              {this.state.steps.map((step, index, array) => {
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
                Write down
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isTitleEmpty: state.recipes.isTitleEmpty,
    isSomeOfStepsEmpty: state.recipes.isSomeOfStepsEmpty,
    isSomeOfIngredientsEmpty: state.recipes.isSomeOfIngredientsEmpty,
    isReady: state.recipes.isReady,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: recipe => dispatch(createRecipe(recipe)),
    resetIsReady: () => dispatch(resetIsReady()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
