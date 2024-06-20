import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./assets/mainpages/Home";
import Order from "./assets/mainpages/Order";
import Success from "./assets/mainpages/Success";
import { useState } from "react";
import { menu } from "./menu";

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [order, setOrder] = useState({});
  const [hesap, setHesap] = useState(0);
  const [secim, setSecim] = useState(0);
  const [siparis, setSiparis] = useState({
    size: "",
    weight: "",
    extra: [],
    piece: 1,
    note: "",
  });
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
          order={order}
          setOrder={setOrder}
          hesap={hesap}
          setHesap={setHesap}
          secim={secim}
          setSecim={setSecim}
          siparis={siparis}
          setSiparis={setSiparis}
          selectedButton={selectedButton}
          clicked={clicked}
        />
      </Route>
      <Route path="/success">
        <Success order={order} hesap={hesap} secim={secim} siparis={siparis} />
      </Route>
    </Switch>
  );
}

export default App;
