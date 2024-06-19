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
  const [selectedButton, setSelectedButton] = useState(
    menuItems.find((item) => item.name === "Ramen").types
  );
  const [clicked, setClicked] = useState("");
  return (
    <Switch>
      <Route path="/home">
        <Home
          menuItems={menuItems}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          setClicked={setClicked}
        />
      </Route>
      <Route path="/order">
        <Order
          setHesap={setHesap}
          selectedButton={selectedButton}
          clicked={clicked}
        />
      </Route>
      <Route path="/success">
        <Success hesap={hesap} />
      </Route>
    </Switch>
  );
}

export default App;
