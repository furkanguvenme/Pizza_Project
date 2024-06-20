import styled from "styled-components";
import "./Home.css";
import MenuCard from "./HomeComponents/MenuCard";
import { useState } from "react";
import Footer from "./SuccessComponents/Footer";
import Order from "./Order";
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

  function cardClick(event) {
    history.push("/order");
    setClicked(event.currentTarget.name);
  }

  function handleClick(event) {
    // event.currentTarget ile tıklanan butonu al
    const buttonName = event.currentTarget.name;
    const selectedMenuItem = menuItems.find((item) => item.name === buttonName);
    if (selectedMenuItem) {
      setSelectedButton(selectedMenuItem.types);
    }
  }

  console.log(menuItems);
  console.log(selectedButton);

  return (
    <>
      <header className="homeHeader">
        <div className="homeHeaderDiv">
          <img src="./Assets/mile1-assets/logo.svg" />
          <p
            style={{
              fontFamily: "Satisfy",
              color: "#FDC913",
              fontSize: "28px",
              margin: "50px 0 0 0",
            }}
          >
            fırsatı kaçırma
          </p>
          <p
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "80px",
              fontWeight: "300",
              color: "white",
              margin: "0",
            }}
          >
            KOD ACIKTIRIR
          </p>
          <p
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "80px",
              fontWeight: "300",
              color: "white",
              margin: "0",
            }}
          >
            PIZZA, DOYURUR
          </p>
          <button
            style={{
              backgroundColor: "#FDC913",
              width: "170px",
              border: "none",
              height: "50px",
              borderRadius: "25px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            ACIKTIM
          </button>
        </div>
      </header>
      <article className="homeArticle">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "500",
          }}
        >
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/1.svg"
          />
          YENİ! Kore
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "500",
          }}
        >
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/2.svg"
          />
          Pizza
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "500",
          }}
        >
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/3.svg"
          />
          Burger
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "500",
          }}
        >
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/4.svg"
          />
          Kızartmalar
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "500",
          }}
        >
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/5.svg"
          />
          Fast food
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            fontWeight: "500",
          }}
        >
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
              <p
                style={{
                  fontFamily: "Quattrocento",
                  fontSize: "60px",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0",
                }}
              >
                Özel
              </p>
              <p
                style={{
                  fontFamily: "Quattrocento",
                  fontSize: "60px",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0 0 5px 0",
                }}
              >
                Lezzetus
              </p>
              <p
                style={{
                  fontFamily: "Barlow",
                  color: "white",
                  margin: "0",
                  fontSize: "18px",
                }}
              >
                Position:Absulute Acı Burger
              </p>
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "#CE2829",
                  width: "120px",
                  height: "40px",
                  borderRadius: "20px",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Sipariş Ver
              </button>
            </div>
          </div>
          <div className="cardPage2">
            <div className="card-2">
              <div style={{ margin: "50px 0 0 50px" }}>
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "Barlow",
                    color: "white",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  Hackathlon
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "Barlow",
                    color: "white",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  Burger Menü
                </p>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "#CE2829",
                    width: "120px",
                    height: "40px",
                    borderRadius: "20px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
            <div className="card-3">
              <div style={{ margin: "50px 0 0 50px" }}>
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "Barlow",
                    color: "black",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "Barlow",
                    color: "black",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  npm gibi kurye
                </p>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "#CE2829",
                    width: "120px",
                    height: "40px",
                    borderRadius: "20px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <main className="homeMain">
        <p
          style={{
            fontFamily: "Satisfy",
            color: "#CE2829",
            fontSize: "28px",
            marginBottom: "0px",
          }}
        >
          en çok paketlenen menüler
        </p>
        <p
          style={{
            fontFamily: "Barlow",
            color: "black",
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
        <FoodDiv>
          <FoodButon name="Ramen" onClick={handleClick}>
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/1.svg"
            />
            Ramen
          </FoodButon>
          <FoodButon name="Pizza" onClick={handleClick}>
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/2.svg"
            />
            Pizza
          </FoodButon>
          <FoodButon name="Burger" onClick={handleClick}>
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/3.svg"
            />
            Burger
          </FoodButon>
          <FoodButon name="French fries" onClick={handleClick}>
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/4.svg"
            />
            French fries
          </FoodButon>
          <FoodButon name="Fast food" onClick={handleClick}>
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/5.svg"
            />
            Fast food
          </FoodButon>
          <FoodButon name="Soft drinks" onClick={handleClick}>
            <img
              style={{ paddingRight: "10px" }}
              src="./Assets/mile2-aseets/icons/6.svg"
            />
            Soft drikns
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
