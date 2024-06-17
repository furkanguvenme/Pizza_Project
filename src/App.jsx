import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./assets/mainpages/Home";
import Order from "./assets/mainpages/Order";
import Success from "./assets/mainpages/Success";

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
