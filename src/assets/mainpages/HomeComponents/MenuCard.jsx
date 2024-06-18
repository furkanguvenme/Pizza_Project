import styled from "styled-components";

const MenuCardDiv = styled.div`
  width: 408px;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
`;

const MenuCardImg = styled.img`
  width: 256px;
  height: 256px;
  object-fit: cover;
  border-radius: 128px;
  margin-top: 30px;
`;

const MenuCardName = styled.p`
  font-family: "Barlow";
  font-size: 20px;
  font-weight: 500;
  width: 350px;
  margin-bottom: 0;
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  align-items: center;
`;
const MenuDivP = styled.p`
  opacity: 0.6;
  font-size: 16px;
  font-weight: 600;
`;

const MenuPrice = styled.p`
  font-size: 20px;
`;

export default function MenuCard({ id, raiting, name, price, picture }) {
  return (
    <MenuCardDiv>
      <MenuCardImg src={picture} />
      <MenuCardName>{name}</MenuCardName>
      <MenuDiv>
        <MenuDivP>{raiting}</MenuDivP>
        <MenuDivP>{`(${id})`}</MenuDivP>
        <MenuPrice>{price}$ </MenuPrice>
      </MenuDiv>
    </MenuCardDiv>
  );
}
