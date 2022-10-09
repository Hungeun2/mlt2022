import styled from 'styled-components';

export const Head = styled.div`
  width: 100%;
  max-width: 500px;
  height: 70px;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
`;
export const Table = styled.table`
  border: 1px solid red;
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;
  th,
  td {
    text-align: center;
    border: 1px solid black;
  }
  .otherDay {
    background-color: lightgray;
  }
`;
