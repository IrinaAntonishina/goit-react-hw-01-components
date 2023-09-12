import { Description } from 'components/ProfileDescrip/Description';
import user from 'data/user.json';
import { Stats } from 'components/ProfileStats/Stats';

import { DivEl } from 'components/Profile/Profile.styled';

export const Profile = () => {
  return (
    <DivEl>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />

      <Stats stats={user.stats} />
    </DivEl>
  );
};
