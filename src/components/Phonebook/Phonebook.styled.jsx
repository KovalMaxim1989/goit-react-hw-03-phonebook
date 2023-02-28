import styled from 'styled-components';

export const Form = styled.form`
  padding: 15px 10px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-family: 'Segoe UI';
  font-size: 18px;
  border: 4px solid red;
  border-radius: 12px;
`;

export const FormLabel = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;
export const Input = styled.input`
  padding: 5px;
  width: auto;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  transition: border 250ms ease-in-out;
  &:hover,
  &:focus {
    border: 2px solid red;
  }
`;

export const Button = styled.button`
  padding: 5px;
  width: 200px;
  border: 2px solid red;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
    background-color: red;
    border-color: transparent;
    color: #fff;
  }
`;
