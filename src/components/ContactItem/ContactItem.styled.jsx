import styled from 'styled-components';

export const Item = styled.li`
  min-width: 280px;
  display: flex;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 80px;
  border: 2px solid red;
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: rgba(142, 0, 0, 0.24) 0px 3px 8px;
    background-color: red;
    border-color: transparent;
    color: #fff;
  }
`;
export const ContactInfo = styled.div`
  /* min-width: 380px; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactName = styled.p`
  display: flex;
  gap: 10px;
  max-width: 245px;
  font-size: 14px;
  font-weight: 600;
`;
export const ContactTel = styled.p`
  display: flex;
  gap: 10px;
  max-width: 245px;
  font-size: 14px;
`;
