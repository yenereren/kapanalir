import React from 'react';
import firebase from 'firebase';
import Dashboard from './components/dashboard/Dashboard';
import LoadingPage from './components/loadingPage/LoadingPage';
import {UserContext} from './contexts/userContext';
import {
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import NewGame from './components/newGame/NewGame';
import JoinGame from './components/joinGame/JoinGame';
import NotFound from './components/notFound/NotFound';

function App() {
  const [user, setUser] =  React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(fbUser) {
      setUser(fbUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if(loading) return <LoadingPage />;

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Dashboard />
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/new-game" component={NewGame} />
            <Route exact path="/join-game" component={JoinGame} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
