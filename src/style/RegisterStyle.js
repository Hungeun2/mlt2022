import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  max-width: 400px;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px 0;
  label {
    display: flex;
    flex-direction: column;
    margin: 10px;
    /* text-align: center; */
    font-weight: bold;
    input {
      margin-top: 5px;
      height: 20px;
    }
  }
  button {
    margin: 10px;
    padding: 10px;
    background-color: #2da44e;
    border: 1px solid rgba(27, 31, 36, 0.15);
    border-radius: 6px;
    color: white;
    cursor: pointer;
    &:disabled {
      background-color: #94d3a2;
      border: 1px solid rgba(27, 31, 36, 0.15);
      cursor: default;
    }
  }
  /* input updown arrow del */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
