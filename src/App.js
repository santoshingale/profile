import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import Home from './components/home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
