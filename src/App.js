import React from 'react';
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/Header';
import 'bulma/css/bulma.css';

function App() {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  return (
    <>
      <Header />
      <div className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {!isLoading && !user && (
              <>
                <h1>Please login below:</h1>
                <hr />
                <button onClick={loginWithRedirect} className="button is-danger">Login</button>
              </>
            )}
            {!isLoading && user && (
              <>
                <h1>You are logged in!</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
