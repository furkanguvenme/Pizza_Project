import { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./SuccessComponents/Footer";
import Checkbox from "./OrderComponents/Checkbox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./Order.css";
import Phone from "./OrderComponents/Phone";
import Name from "./OrderComponents/Name";

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
  width: 31vw;
  object-fit: cover;
  clip-path: inset(80px 0 0 0);
  margin-top: -80px;
  @media (max-width: 1000px) {
    clip-path: inset(0 0 0 0);
    margin-top: 0px;
    width: 75vw;
  }
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
  font-family: "Barlow";
`;

const OrderPrice = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-family: "Barlow";
`;

const OrderH2 = styled.h2`
  font-family: "Barlow";
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 44px;
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

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 20vh;
    margin-top: 0;
  }
`;

const CheckboxDiv = styled.div`
  width: 31vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-bottom: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    width: 100vw;
  }
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

const ValidationMessage = styled.p`
  color: red;
  font-family: "Barlow";
  font-size: 14px;
  margin-top: 10px;
`;

const Descript = styled.p`
  font-family: "Barlow";
  font-size: 16px;
  line-height: 28.8px;
  color: #5f5f5f;

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

const AricleDiv = styled.div`
  width: 595px;

  @media (max-width: 1000px) {
    width: 75vw;
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
  const [prevSize, setPrevSize] = useState("");
  const [prevWeight, setPrevWeight] = useState("");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    const foundItem = selectedButton.find((item) => item.name === clicked);
    if (foundItem) {
      setOrder(foundItem);
      setHesap(foundItem.price);
      setSiparis({ piece: 1, note: "" });
    }
  }, []);

  let newExtra;

  function changeHandler(event) {
    if (event.target.type === "radio" || event.target.name === "weight") {
      if (event.target.name === "size") {
        let extraCost = 0;
        let prevCost = 0;

        if (prevSize === "M") {
          prevCost = 0.5;
        } else if (prevSize === "L") {
          prevCost = 1;
        }

        if (event.target.value === "M") {
          extraCost = 0.5;
        } else if (event.target.value === "L") {
          extraCost = 1;
        }

        setSecim((prevSecim) => prevSecim - prevCost + extraCost);
        setHesap(
          (prevHesap) =>
            prevHesap - siparis.piece * prevCost + siparis.piece * extraCost
        );
        setPrevSize(event.target.value);
      }

      if (event.target.name === "weight") {
        let extraCost = 0;
        let prevCost = 0;

        if (prevWeight === "orta") {
          prevCost = 0.5;
        } else if (prevWeight === "buyuk") {
          prevCost = 1;
        }

        if (event.target.value === "orta") {
          extraCost = 0.5;
        } else if (event.target.value === "buyuk") {
          extraCost = 1;
        }

        setSecim((prevSecim) => prevSecim - prevCst + extraCost);
        setHesap(
          (prevHesap) =>
            prevHesap - siparis.piece * prevCost + siparis.piece * extraCost
        );
        setPrevWeight(event.target.value);
      }

      setSiparis((prevSiparis) => ({
        ...prevSiparis,
        [event.target.name]: event.target.value,
      }));
    }

    if (event.target.type === "checkbox") {
      const oldExtra = siparis[event.target.name] || [];
      const extraCost = parseFloat(event.target.getAttribute("data-cost"));
      const value = event.target.value;

      if (oldExtra.includes(value)) {
        newExtra = oldExtra.filter((v) => v !== value);
        setSelectedExtras((extras) => extras.filter((v) => v !== value));
        setSecim((secim) => secim - extraCost);
        setHesap((hesap) => hesap - siparis.piece * extraCost);
      } else {
        if (selectedExtras.length >= 10) {
          setValidationMessage("En fazla 10 malzeme seçebilirsiniz.");
          return;
        }
        newExtra = [...oldExtra, value];
        setSelectedExtras((extras) => [...extras, value]);
        setSecim((secim) => secim + extraCost);
        setHesap((hesap) => hesap + siparis.piece * extraCost);
      }

      setSiparis({ ...siparis, [event.target.name]: newExtra });

      if (selectedExtras.length >= 4 && selectedExtras.length <= 10) {
        setValidationMessage("");
      }
    }
  }

  function clickPiece(event) {
    if (event.target.value === "+") {
      setSiparis((siparis) => ({ ...siparis, piece: siparis.piece + 1 }));
      setHesap((hesap) => hesap + (order.price + secim));
    } else if (event.target.value === "-") {
      if (siparis.piece > 1) {
        setSiparis((siparis) => ({ ...siparis, piece: siparis.piece - 1 }));
        setHesap((hesap) => hesap - order.price - secim);
      }
    }
  }

  function noteChange(event) {
    setSiparis((siparis) => ({ ...siparis, note: event.target.value }));
  }

  function userInfo(event) {
    if (event.target.id == "phonenumber") {
      setSiparis((siparis) => ({ ...siparis, userPhone: event.target.value }));
    } else {
      setSiparis((siparis) => ({ ...siparis, userName: event.target.value }));
    }
  }

  let history = useHistory();

  function success() {
    if (!siparis.userName) {
      setValidationMessage("Kullanıcı adı giriniz.");
      return;
    }

    if (siparis.userName.length < 3) {
      setValidationMessage("Kullanıcı adı 3 karakterden uzun olmalıdır.");
      return;
    }

    if (selectedExtras.length < 4) {
      setValidationMessage("En az 4 malzeme seçmelisiniz.");
      return;
    } else if (selectedExtras.length > 10) {
      setValidationMessage("En fazla 10 malzeme seçebilirsiniz.");
      return;
    }

    if (!siparis.size) {
      setValidationMessage("Lütfen bir boyut seçiniz.");
      return;
    }

    if (!siparis.weight) {
      setValidationMessage("Lütfen bir hamur kalınlığı seçiniz.");
      return;
    }

    if (selectedExtras.length === 0) {
      setValidationMessage("Lütfen en az bir malzeme seçiniz.");
      return;
    }

    setValidationMessage("");
    window.scrollTo(0, 0);
    history.push("/success");
    axios
      .post("https://reqres.in/api/pizza", siparis)
      .then((response) => {
        console.log("Veri gönderildi:", response.data);
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
      });
  }
  return (
    <>
      <OrderHeader>
        <img src="./Assets/mile1-assets/logo.svg" />
      </OrderHeader>
      <OrderArticle>
        <AricleDiv>
          <ClippedImage src="https://i.hizliresim.com/42p3p5x.png" />
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
          <Descript>{order.description}</Descript>
        </AricleDiv>
      </OrderArticle>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="kullanici">
          <Name userInfo={userInfo} />
          {/*<Phone userInfo={userInfo} />*/}
        </div>
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
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalin">Kalın</option>
              </Kalınlık>
            </div>
          </div>
        </SizeDiv>
        <div style={{ marginTop: "50px" }}>
          <div className="ekMalz">
            <h6 style={{ paddingBottom: "5px" }}>Ek Malzemeler</h6>
            <p>En fazla 10 malzeme seçebilirsiniz.</p>
          </div>
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
          {validationMessage && (
            <ValidationMessage>{validationMessage}</ValidationMessage>
          )}
        </div>
        <label className="label">
          <h5>Sipariş Notu</h5>

          <textarea
            className="textarea"
            onChange={noteChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          ></textarea>
        </label>
        <hr style={{ color: "black", width: "595px", margin: "24px 0" }} />
        <div className="siparisDiv">
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
          <div style={{ marginBottom: "150px" }}>
            <div
              style={{
                width: "386px",
                height: "187px",
                backgroundColor: "#FAF7F2",
                padding: "42px 49px",
                fontWeight: "600",
              }}
            >
              <h6 style={{ marginBottom: "20px" }}>Siparişler Toplamı</h6>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginBottom: "8px" }}>Seçimler</p>
                <p style={{ marginBottom: "8px" }}>{secim}$</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  color: "#CE2829",
                }}
              >
                <p style={{ marginBottom: "8px" }}>Toplam</p>
                <p style={{ marginBottom: "8px" }}>{hesap}$</p>
              </div>
            </div>
            <button
              className="siparisButon"
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
