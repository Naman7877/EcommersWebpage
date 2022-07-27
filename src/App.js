import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footerpage from './components/Footer';
import Login from './components/log/Login';
import Cartdes from './components/Cart/Cartdes';
import Caro from './components/Home/Caro'
import Items from './components/Home/Items';
import Navpalet from './components/Home/Navpalet';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Login">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/Cart">
            <Cartdes />
          </Route>
        </Switch>
      </Router >

    </>
  );
}

export default App;
