import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from './App';
import Home from './components/home';

const Routes = () => (
  <main>
      <Route path='/' exact component={Home}/>
  </main>
)

export default Routes
