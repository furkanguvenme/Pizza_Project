import "./Home.css";

export default function Home() {
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
        <p style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/1.svg"
          />
          YENİ! Kore
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/2.svg"
          />
          Pizza
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/3.svg"
          />
          Burger
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/4.svg"
          />
          Kızartmalar
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/5.svg"
          />
          Fast food
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
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
                  <span style={{ color: "#CE2829" }}>Çok</span> hızlı
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
    </>
  );
}
