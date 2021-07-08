import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupForm from './systems/SignupForm';
import SigninForm from './systems/SigninForm';
import Page from './systems/Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignupForm} exact />
        <Route path="/signin" component={SigninForm} exact />
        <Route path="/page" component={Page} exact />
      </Switch>
    </Router>
  );
}

export default App;