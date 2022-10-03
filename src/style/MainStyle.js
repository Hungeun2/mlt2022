import styled from 'styled-components';

export const Item = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 40%;
  height: auto;
  margin: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  a {
    font-size: 15px;
    text-decoration: none;
    color: black;
  }
  :hover {
    background-color: #e5e5e5;
    a {
      font-weight: 700;
    }
  }
`;

export const ItemList = styled.div`
  border: 1px solid #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px auto;
`;

export const ArtistItem = styled(Item)`
  width: 30%;
`;
