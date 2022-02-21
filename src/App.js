import { Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Signin from "./views/Signin/Signin";
import Signup from "./views/Signup/Signup";
import Layout from './views/Layout/Layout';
import PageNotFound from './views/404';

function App() {
  return (
    <Suspense fallback={() => <h3>Loading please wait!!</h3>}>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/register" component={Signup} />
        <ProtectedRoute path="/" component={Layout} />
        <Route path="*" render={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
