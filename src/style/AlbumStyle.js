import styled from 'styled-components';

export const AlbumStyle = styled.ul`
  max-width: 500px;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  li {
    display: flex;
    flex-direction: column;
    width: 50%;
    img {
      width: 100%;
    }
  }

  div.contents {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-bottom: 3px;
    span {
      margin-bottom: 3px;
    }
  }
`;
