import { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "./SuccessComponents/Footer";
import Checkbox from "./OrderComponents/Checkbox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const OrderHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #ce2829;
`;

const OrderArticle = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #faf7f2;
`;

const ClippedImage = styled.img`
  width: 595px;
  object-fit: cover;
  clip-path: inset(80px 0 0 0);
  margin-top: -80px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

const OrderPrice = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: "Barlow";
`;

const OrderH2 = styled.h2`
  font-family: "Roboto Condensed";
  font-weight: 500;
`;

const RadioButon = styled.input`
  width: 56px;
  height: 56px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  background: #faf7f2;
  color: black;
  font-size: 14px;
  font-family: "Barlow";
  border-radius: 28px;
  display: flex;
  align-items: center;

  &:checked {
    background-color: #ffeecc;
    color: black;
  }

  &:before {
    content: attr(label);
    display: inline-block;
    text-align: center;
    width: 100%;
  }
`;

const Kalınlık = styled.select`
  border: none;
  background-color: #faf7f2;
  width: 283px;
  height: 56px;
  padding-left: 15px;
  border-radius: 6px;
`;

const H5 = styled.h5`
  margin-bottom: 15px;
`;

const SizeDiv = styled.div`
  width: 595px;
  height: 100.75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const CheckboxDiv = styled.div`
  width: 595px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-bottom: 100px;
`;

const ButonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 141px;
  height: 56px;
`;

const PieceButon = styled.button`
  width: 47px;
  height: 56px;
  border: none;
  border-radius: 3px;
  background-color: #faf7f2;

  &:hover {
    background-color: #ffeecc;
  }
`;

export default function Order({
  clicked,
  hesap,
  setHesap,
  order,
  setOrder,
  secim,
  setSecim,
  siparis,
  setSiparis,
  selectedButton,
}) {
  useEffect(() => {
    const foundItem = selectedButton.find((item) => item.name === clicked);
    if (foundItem) {
      setOrder(foundItem);
    }
    setHesap((hesap) => hesap + foundItem.price);
  }, []);

  let newExtra;

  function changeHandler(event) {
    if (event.target.type === "radio" || event.target.name === "weight") {
      setSiparis({ ...siparis, [event.target.name]: event.target.value });
    }
    if (event.target.type === "checkbox") {
      const oldExtra = siparis[event.target.name];
      const extraCost = parseFloat(event.target.getAttribute("data-cost"));

      if (oldExtra.includes(event.target.value)) {
        newExtra = oldExtra.filter((v) => v !== event.target.value);
        setSecim((secim) => secim - extraCost);
        setHesap((hesap) => hesap - secim);
      } else {
        newExtra = [...oldExtra, event.target.value];
        setSecim((secim) => secim + extraCost);
        setHesap((hesap) => hesap + secim);
      }
      setSiparis({ ...siparis, [event.target.name]: newExtra });
    }
  }

  function clickPiece(event) {
    if (event.target.value === "+") {
      setHesap((hesap) => hesap + (order.price + secim));
      setSiparis((siparis) => ({ ...siparis, piece: siparis.piece + 1 }));
    } else if (event.target.value === "-") {
      if (siparis.piece > 1) {
        setHesap((hesap) => hesap - (order.price + secim));
        setSiparis((siparis) => ({ ...siparis, piece: siparis.piece - 1 }));
      }
    }
  }

  let history = useHistory();

  function success() {
    history.push("/success");
  }

  console.log(siparis);
  console.log(hesap);
  console.log(secim);
  return (
    <>
      <OrderHeader>
        <img src="./Assets/mile1-assets/logo.svg" />
      </OrderHeader>
      <OrderArticle>
        <div style={{ width: "595px" }}>
          <ClippedImage src="./Assets/mile2-aseets/pictures/form-banner.png" />
          <p style={{ margin: "44px 0" }}>
            Anasayfa -
            <span style={{ color: "#CE2829", fontWeight: "500" }}>
              {" Sipariş Oluştur"}
            </span>
          </p>
          <OrderH2>{clicked}</OrderH2>
          <InfoDiv>
            <OrderPrice>{order.price}$</OrderPrice>
            <InfoDiv2>
              <p>{order.rating}</p>
              <p>{`(${order.id})`}</p>
            </InfoDiv2>
          </InfoDiv>
          <p>{order.description}</p>
        </div>
      </OrderArticle>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SizeDiv>
          <div>
            <H5>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </H5>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
              }}
            >
              <RadioButon
                label="S"
                name="size"
                type="radio"
                value="S"
                onChange={changeHandler}
              ></RadioButon>{" "}
              <RadioButon
                label="M"
                name="size"
                type="radio"
                value="M"
                onChange={changeHandler}
              ></RadioButon>
              <RadioButon
                label="L"
                name="size"
                type="radio"
                value="L"
                onChange={changeHandler}
              ></RadioButon>
            </div>
          </div>
          <div>
            <div>
              <H5>
                Hamur Seç <span style={{ color: "red" }}>*</span>
              </H5>
              <Kalınlık name="weight" onChange={changeHandler} defaultValue="">
                <option value="" disabled>
                  -Hamur Kalınlığı Seç-
                </option>
                <option value="kucuk">Küçük</option>
                <option value="orta">Orta</option>
                <option value="buyuk">Büyük</option>
              </Kalınlık>
            </div>
          </div>
        </SizeDiv>
        <div style={{ marginTop: "50px" }}>
          <h6 style={{ paddingBottom: "5px" }}>Ek Malzemeler</h6>
          <p>En fazla 10 malzeme seçebilirsiniz.</p>
          <CheckboxDiv>
            {order.ingredients &&
              order.ingredients.map((item, index) => (
                <Checkbox
                  key={index}
                  ingredient={item.ingredient}
                  cost={item.cost}
                  changeCheckbox={changeHandler}
                />
              ))}
          </CheckboxDiv>
        </div>
        <label>
          <h5 style={{ paddingBottom: "15px" }}>Sipariş Notu</h5>

          <textarea
            style={{
              width: "595px",
              height: "56px",
              paddingTop: "15px",
              border: "none",
              backgroundColor: "#FAF7F2",
              fontFamily: "Barlow",
              paddingLeft: "15px",
            }}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          ></textarea>
        </label>
        <hr style={{ color: "black", width: "595px", margin: "24px 0" }} />
        <div
          style={{
            width: "595px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ButonDiv>
            <PieceButon value="-" onClick={clickPiece}>
              -
            </PieceButon>
            <p
              style={{
                width: "47px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#faf7f2",
              }}
            >
              {siparis.piece}
            </p>
            <PieceButon value="+" onClick={clickPiece}>
              +
            </PieceButon>
          </ButonDiv>
          <div style={{ paddingBottom: "150px" }}>
            <div
              style={{
                width: "386px",
                height: "187px",
                backgroundColor: "#FAF7F2",
                padding: "42px 49px",
              }}
            >
              <h6>Siparişler Toplamı</h6>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Seçimler</p>
                <p>{secim}$</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>Toplam</p>
                <p>{hesap}$</p>
              </div>
            </div>
            <button
              style={{
                width: "386px",
                height: "62px",
                backgroundColor: "#FDC913",
                fontSize: "18px",
                fontWeight: "bold",
                border: "none",
              }}
              onClick={success}
            >
              Sipariş Ver
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
