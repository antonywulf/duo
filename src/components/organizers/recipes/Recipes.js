import React from 'react';
import RecipesItem from './RecipesItem';
import { Link } from 'react-router-dom';
import { PlusCircle } from '../../ui/svg/svg';
import { motion } from 'framer-motion';
import styles from './Recipes.module.scss';

const recipes = [
  { title: 'Breakfasts', linkTo: 'breakfasts' },
  { title: 'The first dish', linkTo: 'dinners' },
  { title: 'The main dish', linkTo: 'suppers' },
  { title: 'Drinks', linkTo: 'drinks' },
  { title: 'Desserts', linkTo: 'desserts' },
  { title: 'Snacks', linkTo: 'snacks' },
  { title: 'Salads', linkTo: 'salads' },
  { title: 'Other...', linkTo: 'other' },
];

const Recipes = () => {
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
          <Link to="/recipes/create" className={`${styles.plus}`}>
            <PlusCircle />
          </Link>
        </motion.div>
      </div>

      {recipes.map(recipe => (
        <RecipesItem key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
