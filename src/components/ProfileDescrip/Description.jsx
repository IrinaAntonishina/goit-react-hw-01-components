import { Avatar, Wrapper, Text } from './Description.styles';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <Text fontWeight={700}>{username}</Text>
      <Text color={'#b3afaf'} fontSize={'13px'}>
        @{tag}
      </Text>
      <Text color={'#b3afaf'} fontSize={'13px'}>
        {location}
      </Text>
    </Wrapper>
  );
};
