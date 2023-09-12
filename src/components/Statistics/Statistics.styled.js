import styled from 'styled-components';

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
  font-weight: 300;
  font-size: 17px;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  gap: 7px;
  align-items: center;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  padding: 8px;
  background-color: #${() =>
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)};
`;

export const Text = styled.span`
  color: white;
`;
