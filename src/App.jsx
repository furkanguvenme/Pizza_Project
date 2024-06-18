import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./assets/mainpages/Home";
import Order from "./assets/mainpages/Order";
import Success from "./assets/mainpages/Success";
import { useState } from "react";
import { menu } from "./menu";

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [hesap, setHesap] = useState(0);
  return (
    <Switch>
      <Route path="/home">
        <Home menuItems={menuItems} />
      </Route>
      <Route path="/order" setHesap={setHesap}>
        <Order />
      </Route>
      <Route path="/success" hesap={hesap}>
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
