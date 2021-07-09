import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignupForm from './systems/SignupForm';
import SigninForm from './systems/SigninForm';
import Page from './systems/Page';
import Home from './systems/Home';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user} 
          loggedInPath="/page" 
          path="/signup"
          exact
        >
          <SignupForm />
        </IsUserRedirect>
        
        <IsUserRedirect
          user={user} 
          loggedInPath="/page" 
          path="/signin"
          exact
        >
          <SigninForm />
        </IsUserRedirect>
        
        <ProtectedRoute user={user} path="/page" exact>
          <Page />
        </ProtectedRoute>

        <IsUserRedirect user={user} loggedInPath="/page" path="/">
          <Home />
        </IsUserRedirect>

      </Switch>
    </Router>
  );
}

export default App;