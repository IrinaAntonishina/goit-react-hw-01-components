import { Avatar, Name, Online } from './FriendList.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      <Online color={isOnline ? '179c0b' : 'eb4034'}>{}</Online>
      <Avatar src={avatar} alt="User avatar" width="60" />
      <Name>{name}</Name>
    </>
  );
};
