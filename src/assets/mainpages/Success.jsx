import styled from "styled-components";

const SuccessDiv = styled.div`
  width: 100%;
  height: 1080px;
  background-color: #ce2829;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LezzetP = styled.p`
  font-size: 32px;
  font-family: "Satisfy";
  color: #fdc913;
  margin-top: 80px;
`;

const SiparisAlındı = styled.h1`
  font-family: "Roboto Condensed";
  font-size: 86px;
  color: white;
  font-weight: 300;
`;

const OrderName = styled.h3`
  font-family: "Barlow";
  font-weight: 600;
  font-size: 22px;
  color: white;
  margin-bottom: 60px;
`;

const OrderSize = styled.p`
  font-family: "Barlow";
  font-weight: 400;
  font-size: 16px;
  color: white;
`;

const OrderSpan = styled.span`
  font-weight: 700;
`;

const OrderPrice = styled.div`
  border: 1px solid #faf7f2;
  width: 288px;
  height: 191px;
  border-radius: 6px;
  padding: 42px 49px;
  font-family: "Barlow";
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Success(order) {
  console.log(order);
  return (
    <SuccessDiv>
      <img style={{ marginTop: "56px" }} src="./Assets/mile1-assets/logo.svg" />
      <LezzetP>lezzetin yolda</LezzetP>
      <SiparisAlındı>SİPARİŞ ALINDI</SiparisAlındı>
      <hr
        style={{
          width: "581px",
          border: "1px solid #FAF7F2",
          opacity: "0.5",
          marginBottom: "40px",
        }}
      />
      <OrderName>{order.order.name}</OrderName>
      <div style={{ width: "201px", marginBottom: "60px" }}>
        <OrderSize>
          Boyut: <OrderSpan>{order.siparis.size}</OrderSpan>
        </OrderSize>
        <OrderSize>
          Hamur: <OrderSpan>{order.siparis.weight}</OrderSpan>
        </OrderSize>
        <OrderSize>
          Ek Malzemeler: <OrderSpan>{order.siparis.extra.join(", ")}</OrderSpan>
        </OrderSize>
      </div>
      <OrderPrice>
        <p style={{ fontSize: "20px" }}>Sipariş Toplamı</p>
        <Price>
          <p>Seçimler</p>
          <p>{order.secim}$</p>
        </Price>
        <Price>
          <p>Toplam</p>
          <p>{order.hesap}$</p>
        </Price>
      </OrderPrice>
    </SuccessDiv>
  );
}
