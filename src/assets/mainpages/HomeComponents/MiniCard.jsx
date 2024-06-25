import styled from "styled-components";

export default function MiniCard(id, raiting, name, price, picture, cardClick) {
  const MiniButon = styled.button`
    width: 80vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
  `;

  const MiniPic = styled.img`
    width: 10vh;
    height: 10vh;
  `;

  const MiniInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <MiniButon onClick={cardClick}>
      <MiniPic src={picture} />
      <MiniInfo>
        <p>{name}</p>
        <div>
          <p>{price}</p>
          <p>{id}</p>
          <p>{raiting}</p>
        </div>
      </MiniInfo>
    </MiniButon>
  );
}
