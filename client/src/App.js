import './App.css';
import InputTodo from './components/InputTodo.jsx';
import ListTodos from './components/ListTodo.jsx';
import React, { Fragment, useState } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import WelcomePage from './components/WelcomePage.jsx';
import CheckLoginRegister from './components/CheckLoginRegister';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }


  return (
    <Fragment>
      <Router>
      <div className="container2">
      {/* <InputTodo/>
      <ListTodos/> */}
        <Switch>
          <Route path='/todos' render={() =>
            <Fragment>
              <InputTodo/>
              <ListTodos/>
              <CheckLoginRegister/>
            </Fragment>
          }/>
          <Route exact path="/" render={props => <WelcomePage {...props}/>}/>
          <Route exact path="/auth" render={props => <CheckLoginRegister {...props}/>}/>
          <Route exact path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth = {setAuth}/>  : <Redirect to="/auth"/>}/>
          <Route exact path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth = {setAuth}/> : <Redirect to="/auth"/>}/>
        </Switch>
      </div>


      </Router>
      
    </Fragment>
  )
}

export default App
