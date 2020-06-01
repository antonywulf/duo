import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import AboutDUO from './components/aboutDUO/AboutDUO';
import SignIn from './components/auth/sign-in/SignIn';
import SignUp from './components/auth/sign-up/SignUp';
import Profile from './components/profile/Profile';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';

function App() {
  return (
    <BrowserRouter>
      <TopNavigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/aboutduo" component={AboutDUO} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
