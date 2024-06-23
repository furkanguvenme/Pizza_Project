import React, { useState } from "react";
import styled from "styled-components";
import "./Home.css";
import MenuCard from "./HomeComponents/MenuCard";
import Footer from "./SuccessComponents/Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FoodButon = styled.button`
  width: 187px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  &.active {
    background-color: black;
    color: white;
  }
`;

const FoodDiv = styled.div`
  display: flex;
  width: 1272px;
  justify-content: center;
  gap: 30px;
`;

const CardSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 50px 0 125px 0;
  background-color: #faf7f2;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 1272px;
  gap: 24px;
`;

export default function Home({
  menuItems,
  selectedButton,
  setSelectedButton,
  setClicked,
}) {
  let history = useHistory();
  const [activeButton, setActiveButton] = useState("Ramen");

  function cardClick(event) {
    history.push("/order");
    setClicked(event.currentTarget.name);
  }

  function handleClick(event) {
    const buttonName = event.currentTarget.name;
    setActiveButton(buttonName);
    const selectedMenuItem = menuItems.find((item) => item.name === buttonName);
    if (selectedMenuItem) {
      setSelectedButton(selectedMenuItem.types);
    }
  }

  return (
    <>
      <header className="homeHeader">
        <div className="homeHeaderDiv">
          <img src="./Assets/mile1-assets/logo.svg" />
          <p className="firsat">fırsatı kaçırma</p>
          <p className="aclik">KOD ACIKTIRIR</p>
          <p className="aclik">PIZZA, DOYURUR</p>
          <button
            className="acim"
            onClick={() => (window.location.hash = "CardDiv")}
          >
            ACIKTIM
          </button>
        </div>
      </header>
      <article className="homeArticle">
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/1.svg"
          />
          YENİ! Kore
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/2.svg"
          />
          Pizza
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/3.svg"
          />
          Burger
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/4.svg"
          />
          Kızartmalar
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/5.svg"
          />
          Fast food
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/6.svg"
          />
          Gazlı İçecek
        </p>
      </article>
      <article>
        <div className="cardPage">
          <div className="card-1">
            <div className="elements-1">
              <p className="ozel">Özel</p>
              <p
                className="ozel"
                style={{
                  margin: "0 0 5px 0",
                }}
              >
                Lezzetus
              </p>
              <p className="burger">Position:Absulute Acı Burger</p>
              <button className="siparis">Sipariş Ver</button>
            </div>
          </div>
          <div className="cardPage2">
            <div className="card-2">
              <div style={{ margin: "50px 0 0 50px" }}>
                <p>Hackathlon</p>
                <p>Burger Menü</p>
                <button className="siparis">Sipariş Ver</button>
              </div>
            </div>
            <div className="card-3">
              <div style={{ margin: "50px 0 0 50px" }}>
                <p>
                  <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı
                </p>
                <p>npm gibi kurye</p>
                <button className="siparis">Sipariş Ver</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <main className="homeMain">
        <p className="most" id="CardDiv">
          en çok paketlenen menüler
        </p>
        <p className="doy">Acıktıran Kodlara Doyuran Lezzetler</p>
        <FoodDiv>
          <FoodButon
            name="Ramen"
            onClick={handleClick}
            className={activeButton === "Ramen" ? "active" : ""}
          >
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/1.svg"
            />
            Ramen
          </FoodButon>
          <FoodButon
            name="Pizza"
            onClick={handleClick}
            className={activeButton === "Pizza" ? "active" : ""}
          >
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/2.svg"
            />
            Pizza
          </FoodButon>
          <FoodButon
            name="Burger"
            onClick={handleClick}
            className={activeButton === "Burger" ? "active" : ""}
          >
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/3.svg"
            />
            Burger
          </FoodButon>
          <FoodButon
            name="French fries"
            onClick={handleClick}
            className={activeButton === "French fries" ? "active" : ""}
          >
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/4.svg"
            />
            French fries
          </FoodButon>
          <FoodButon
            name="Fast food"
            onClick={handleClick}
            className={activeButton === "Fast food" ? "active" : ""}
          >
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/5.svg"
            />
            Fast food
          </FoodButon>
          <FoodButon
            name="Soft drinks"
            onClick={handleClick}
            className={activeButton === "Soft drinks" ? "active" : ""}
          >
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/6.svg"
            />
            Soft drinks
          </FoodButon>
        </FoodDiv>
      </main>
      {
        <CardSection>
          <CardDiv>
            {selectedButton.map((item) => (
              <MenuCard
                key={item.id}
                id={item.id}
                raiting={item.rating}
                name={item.name}
                price={item.price}
                picture={item.picture}
                selectedButton={selectedButton}
                cardClick={cardClick}
              />
            ))}
          </CardDiv>
        </CardSection>
      }
      <footer>
        <Footer />
      </footer>
    </>
  );
}
