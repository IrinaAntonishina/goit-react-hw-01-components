import { FriendListItem } from "./FriendListItem"
import friends from '../friends.json'
import { DivEl } from "components/Profile/Profile.styled"



export const FriendList = () => {
return (
  
    <DivEl margin={'10px'}>
  <FriendListItem friends={friends}/>
</DivEl>
)
}