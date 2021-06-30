import React from 'react';
import Flex from '@/components/Flex';

import Tab from '@/components/Tab';

const DefaultSidebar: React.FC = () => {
  return (
    <Flex backgroundColor="#363740" py="48px" minWidth="255px">
      <Tab
        links={[
          {
            text: '오늘의 이어',
            href: `/`,
          },
          {
            text: '예약관리',
            href: `/12`,
          },
          {
            text: '사용자 관리',
            href: `/11`,
          },
        ]}
      />
    </Flex>
  );
};

export default DefaultSidebar;
