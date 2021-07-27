import React from 'react';
import Flex from '@/components/Flex';

import Tab from '@/components/Tab';

const DefaultSidebar: React.FC = () => {
  return (
    <Flex backgroundColor="#F9F9F9" py="48px" minWidth="225px">
      <Tab
        links={[
          {
            text: '오늘의 이어',
            href: `/`,
          },
          {
            text: '예약관리',
            href: `/reservation`,
          },
          {
            text: '사용자 관리',
            href: `/userManage`,
          },
        ]}
      />
    </Flex>
  );
};

export default DefaultSidebar;
