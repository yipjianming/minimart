import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddItem from './components/Admin/AddItem'
import TableView from './components/Admin/TableView'
import ItemList from './components/ItemList'
import Dashboard from './components/Admin/Dashboard';

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addItem">
            <AddItem />
          </Route>
          <Route path="/admin">
            <Dashboard />
          </Route>
          <Route path="/TableView">
            <TableView />
          </Route>
          <Route path="/">
            <ItemList />
          </Route>
        </Switch>
    </Router>
  );
}


