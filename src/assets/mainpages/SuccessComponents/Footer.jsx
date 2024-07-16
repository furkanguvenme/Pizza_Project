import styled from "styled-components";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Barlow";
  padding: 100px 50px 20px 50px;
  color: white;
  height: 481.25px;
`;

const FooterTop1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
`;

const NavA = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16.25vw;
  font-family: "Barlow";
  color: white;
  height: 80px;
`;

const InstaDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const H2 = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const Cizgi = styled.div`
  background-color: #8f8c8c;
  width: 100%;
  height: 1px;
`;

const Sıcacık = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterTop style={{ backgroundColor: "#1A1A1A" }}>
        <FooterTop1>
          <div>
            <div>
              {" "}
              <img
                style={{ marginTop: "-44px" }}
                src="https://i.hizliresim.com/izj9h9o.png"
              />
            </div>
            <FooterNav>
              <NavA href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src="https://i.hizliresim.com/mlohs5f.png"
                />
                341 Londonderry Road,
                <br /> Istanbul Türkiye
              </NavA>
              <NavA href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src="https://i.hizliresim.com/5gobod6.png"
                />
                aciktim@teknolojikyemekler.com
              </NavA>
              <NavA href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src="https://i.hizliresim.com/nexx0tg.png"
                />
                +90 216 123 45 67
              </NavA>
            </FooterNav>
          </div>
          <Sıcacık>
            <H2 style={{ marginBottom: "60px" }}>Sıccacık Menuler</H2>
            <P>Terminal Pizza</P>
            <P>5 Kişilik Hechathion Pizza</P>
            <P>useEffect Tavuklu Pizza</P>
            <P>Beyaz Console Frosty</P>
            <P>Testler Geçti Mutlu Burger</P>
            <P>Position Absolute Acı Burger</P>
          </Sıcacık>
        </FooterTop1>
        <Sıcacık>
          <H2 style={{ marginBottom: "40px" }}>Instagram</H2>
          <InstaDiv>
            <img
              src="https://i.hizliresim.com/apikznn.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="https://i.hizliresim.com/l2l3aj8.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="https://i.hizliresim.com/1mrogyj.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="https://i.hizliresim.com/gyhsxo5.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="https://resmim.net/cdn/2024/07/16/WHShQb.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="https://resmim.net/cdn/2024/07/16/WHSAzZ.png"
              style={{ scale: "0.9" }}
            />
          </InstaDiv>
        </Sıcacık>
      </FooterTop>
      <Cizgi />
      <FooterBottom
        style={{ backgroundColor: "#1a1a1a", paddingTop: "27.5px" }}
      >
        <p>© 2023 Teknolojik Yemekler</p>
        <p>
          <FaSquareXTwitter style={{ scale: "1.5" }} />
        </p>
      </FooterBottom>
    </>
  );
}
