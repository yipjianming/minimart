import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserMain from './components/User/Main'
import AdminMain from './components/Admin/Main';

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/admin">
            <AdminMain />
          </Route>
          <Route path="/">
            <UserMain />
          </Route>
        </Switch>
    </Router>
  );
}


