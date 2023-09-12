import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  background-color: #e4f5f2;
  border-top: 1px solid #c5dbd7;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex-basis: calc(100% / 3);
  padding: 15px 0 15px 0;
  border-right: ${props => props.border};
  border-left: ${prop => prop.border};
`;

export const Text = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #b3afaf;
`;

export const Stat = styled.span`
  font-size: 13px;
  font-weight: 700;
`;
