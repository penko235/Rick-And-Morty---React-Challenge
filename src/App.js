import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from './components/context/auth-context';
import Home from './components/views/Home';
import Navbar from './components/views/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PageNotFound from './components/views/PageNotFound';
import Episodes from './components/episodes/Episodes';
import Location from './components/location/Location';
import Characters from './components/characters/Characters';
import { CssBaseline } from '@material-ui/core';

const root = {
  background: '#262C3A',
  fontFamily: 'Nunito',
  margin: 0
};

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  const LoginAuth = () => {
    setloggedIn(true);
  };

  const Logout = () => {
    localStorage.removeItem('user');
    setloggedIn(false);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ LoginAuth, Logout, loggedIn }}>
      <Router>
        <div style={root}>
          <CssBaseline />
          <Navbar />
          {localStorage.getItem('user') ? (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/episodes" component={Episodes} />
              <Route path="/location" component={Location} />
              <Route path="/characters" component={Characters} />
              <Route path="/login" component={Home} />
              <Route path="/register" component={Home} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          )}
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
