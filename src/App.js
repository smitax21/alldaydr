import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
import Auth from './Auth'

import LandingPage from './components/LandingPage/LandingPage.component';
import SignUp from './Pages/SignUp/SignUp.component'
import Dashboard from './components/Dashboard/Dashboard.component';
import ProductPreview from './components/ProductPreview/ProductPreview.component';

function App({currentUser}) {
  const [isAuth, setIsAuth] = useState(true);

  
   
  return (
    <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={SignUp} />
        
        <Route exact path='/dashboard'>
          <ProtectedRoute Cmp={Dashboard} />
        </Route>

        <Route exact path='/product'>
          <ProtectedRoute Cmp={ProductPreview} />
        </Route>
        
        {/* <Route exact path='*' component={() => "404 NOT FOUND"} /> */}
        
    </Router>
  );
}

export default App;
