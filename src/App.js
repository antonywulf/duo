import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutDUO from './components/aboutDUO/AboutDUO';
import SignIn from './components/auth/sign-in/SignIn';
import SignUp from './components/auth/sign-up/SignUp';
import Profile from './components/profile/Profile';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';
import Organizers from './components/organizers/Organizers';
import Recipes from './components/organizers/recipes/Recipes';
import ChangeRecipe from './components/organizers/recipes/recipe/ChangeRecipe';
import CreateRecipe from './components/organizers/recipes/recipe/CreateRecipe';
import RecipeDetails from './components/organizers/recipes/recipe/RecipeDetails';
import RecipesOfCategory from './components/organizers/recipes/RecipesOfCategory';
import ScrollToTop from './components/helpers/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopNavigation />
      <Switch>
        <Route exact path="/" component={Organizers} />
        <Route path="/profile" component={Profile} />
        <Route path="/aboutduo" component={AboutDUO} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/create" component={CreateRecipe} />
        <Route exact path="/recipes/:category" component={RecipesOfCategory} />
        <Route exact path="/recipes/:category/:recipeId" component={RecipeDetails} />
        <Route exact path="/recipes/:category/:recipeId/change" component={ChangeRecipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
