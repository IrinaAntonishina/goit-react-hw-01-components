import styled from 'styled-components';

export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 25px;
  margin: 10px 10px 0 10px;
  box-shadow: rgba(46, 47, 66, 0.08) 0px 1px 6px,
    rgba(46, 47, 66, 0.16) 0px 1px 1px, rgba(46, 47, 66, 0.08) 0px 2px 1px;
`;

export const Online = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #${prop => prop.color};
`;
export const Avatar = styled.img`
  box-shadow: rgba(46, 47, 66, 0.08) 0px 1px 6px,
    rgba(46, 47, 66, 0.16) 0px 1px 1px, rgba(46, 47, 66, 0.08) 0px 2px 1px;
  border-radius: 7px;
  padding: 4px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
