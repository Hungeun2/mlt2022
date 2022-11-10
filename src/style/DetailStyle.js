import styled from 'styled-components';

export const Head = styled.div`
  width: 100%;
  max-width: 500px;
  height: 70px;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
`;
export const Table = styled.table`
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;
  th,
  td {
    text-align: center;
    border: 1px solid black;
  }
  tr.halfDay {
    background-color: rgb(220, 220, 220);
  }
  tr {
    td.day {
      background-color: white;
    }
  }

  .change {
    background-color: #ccf381;
    &:hover {
      .changeAmount {
        display: block;
      }
    }
  }
  .changeAmount {
    font-size: 14px;
    display: none;
    color: #4831d4;
    font-weight: 700;
  }
  .changeAmount.minus {
    color: red;
  }
`;
