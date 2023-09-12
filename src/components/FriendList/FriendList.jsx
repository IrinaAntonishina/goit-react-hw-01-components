import { DivEl } from 'components/Profile/Profile.styled';
import { FriendListItem } from './FriendListItem';
import { ItemFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <DivEl margin={'10px'}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <ItemFriend key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </ItemFriend>
      ))}
    </DivEl>
  );
};
