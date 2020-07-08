import React from 'react';
import styles from './Recipes.module.scss';
import { Link } from 'react-router-dom';

const RecipesItem = props => {
  const { title, linkTo } = props.recipe;

  return (
    <Link to={`recipes/${linkTo}`} className="removeTextDecoration">
      <div className={`card mb-3 ${styles.cardItem}`}>
        <div className="row align-items-center py-2">
          <div className="col-4 pl-4">
            <div className={`card-img ${styles[linkTo]}`} />
          </div>
          <div className="col-8">
            <div className="card-body p-0">
              <h4 className={`card-title mb-0`}>{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipesItem;
