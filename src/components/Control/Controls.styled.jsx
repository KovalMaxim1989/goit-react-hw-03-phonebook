import styled from 'styled-components';

export const Button = styled.button`
  /* margin-left: auto; */
  padding: 5px;
  height: 30px;
  border: 1px solid red;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: rgba(142, 0, 0, 0.24) 0px 3px 8px;
    background-color: red;
    border-color: transparent;
    color: #fff;
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
