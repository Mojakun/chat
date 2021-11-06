import { Switch, Route } from 'react-router-dom';
import SingUp from '../pages/auth/SingUp';
import Home from '../pages/index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <SingUp />
      </Route>
    </Switch>
  );
};

export default Router;
