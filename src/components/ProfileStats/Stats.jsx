import { Item, List, Stat, Text } from './Stats.styled';

export const Stats = ({ stats }) => {
  return (
    <List>
      <Item>
        <Text>Followers</Text>

        <Stat>{stats.followers}</Stat>
      </Item>
      <Item border={'1px solid #c5dbd7'}>
        <Text>Views</Text>

        <Stat>{stats.views}</Stat>
      </Item>
      <Item>
        <Text>Likes</Text>

        <Stat>{stats.likes}</Stat>
      </Item>
    </List>
  );
};
