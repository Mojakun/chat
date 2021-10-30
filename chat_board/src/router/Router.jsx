import { Switch, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Router;
