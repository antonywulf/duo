import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import RecipesOfCategoryItem from './RecipesOfCategoryItem';
import { Link } from 'react-router-dom';
import { PlusCircle } from '../../ui/svg/svg';
import { motion } from 'framer-motion';
import styles from './Recipes.module.scss';

class RecipesOfCategory extends Component {
  state = {
    searchRecipe: '',
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { recipesForCategory } = this.props;
    if (recipesForCategory) {
      const isArr = Array.isArray(recipesForCategory);
      if (isArr) {
        if (recipesForCategory.length) {
          const showedRecipesForCategory = this.state.searchRecipe
            ? recipesForCategory.filter(recipe => {
                return (
                  recipe.title.toLowerCase().indexOf(this.state.searchRecipe.toLowerCase()) !== -1
                );
              })
            : recipesForCategory;
          return (
            <div className={`container mt-4 pt-5 pb-3 text-center ${styles.block}`}>
              <div className="row align-items-center mb-3">
                <div className="col-8 align-self-center">
                  <h3 className={`${styles.h3}`}>Add new recipe</h3>
                </div>
                <motion.div
                  animate={{ rotateZ: 90 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="col-4"
                >
                  <Link
                    to={{
                      pathname: '/recipes/create',
                      state: { prevPath: this.props.location.pathname },
                    }}
                    className={`${styles.plus}`}
                  >
                    <PlusCircle />
                  </Link>
                </motion.div>
              </div>

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  type="text"
                  className={`form-control ${styles.searchPanel}`}
                  id="searchRecipe"
                  placeholder="Search for a recipe"
                  autoComplete="off"
                />
              </div>
              {showedRecipesForCategory.map(recipe => (
                <RecipesOfCategoryItem key={recipe.id} recipe={recipe} />
              ))}
            </div>
          );
        } else {
          return (
            <div className={`container mt-4 pt-5 text-center ${styles.block}`}>
              <div className="row align-items-center mb-5">
                <div className="col-8 align-self-center">
                  <h3 className={`${styles.h3}`}>Add new recipe</h3>
                </div>
                <motion.div
                  animate={{ rotateZ: 90 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="col-4"
                >
                  <Link
                    to={{
                      pathname: '/recipes/create',
                      state: { prevPath: this.props.location.pathname },
                    }}
                    className={`${styles.plus}`}
                  >
                    <PlusCircle />
                  </Link>
                </motion.div>
              </div>

              <p className={`lead ${styles.noRecipe}`}>No recipes for this category</p>
            </div>
          );
        }
      } else {
        return null;
      }
    } else {
      return (
        <div className={`container mt-4 pt-5 ${styles.block}`}>
          <p className={`lead text-center ${styles.loadingP}`}>Loading recipes...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  const userId = state.firebase.auth.uid;
  const collection = `recipes/${category}/${userId}`;
  const recipesForCategory = state.firestore.ordered[collection];
  return {
    collection: collection,
    recipesForCategory: recipesForCategory ? recipesForCategory : null,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [{ collection: `${props.collection}` }];
  })
)(RecipesOfCategory);
