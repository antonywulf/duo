import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styles from './Recipes.module.scss';

const RecipesOfCategoryItem = props => {
  const { id, title, createdAt, updatedAt } = props.recipe;
  return (
    <Link
      to={location => ({ ...location, pathname: `${location.pathname}/${id}` })}
      className="removeTextDecoration"
    >
      <div className={`card mb-3 ${styles.cardItemDetails}`}>
        <div className="card-body p-0">
          <h5 className="my-2">{title}</h5>
        </div>
        {updatedAt ? (
          <div style={{ background: '#1f262d', color: '#71787e' }} className="card-footer">
            Updated: {moment(updatedAt.toDate()).calendar()}
          </div>
        ) : (
          <div style={{ background: '#1f262d', color: '#71787e' }} className="card-footer">
            Created: {moment(createdAt.toDate()).calendar()}
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipesOfCategoryItem;
