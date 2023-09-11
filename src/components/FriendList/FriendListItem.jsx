

import { Avatar, ItemFriend, Name, Online } from "./FriendList.styled"

export const FriendListItem = ({friends}) => {
    return (
       <>{friends.map(friend => (
        <ItemFriend key={friend.id}>
            {friend.isOnline ? <Online color={'179c0b'}>{}</Online> : <Online color={'eb4034'}>{}</Online>}
  <Avatar src={friend.avatar} alt="User avatar" width="60" />
  <Name>{friend.name}</Name>
</ItemFriend>
       ))
       }
       </>
    )
}