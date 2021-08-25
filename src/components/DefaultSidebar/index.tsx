import React from 'react';
import Flex from '@/components/Flex';

import Tab from '@/components/Tab';

import { ReactComponent as Logo } from '../../images/icons-logo.svg';

const DefaultSidebar: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#F9F9F9"
      p="48px 45px"
      minWidth="150px"
    >
      <Logo />
      <Tab
        mt="80px"
        links={[
          {
            text: '오늘의 이어',
            href: '/todayEars',
          },
          {
            text: '예약관리',
            href: '/reservation',
          },
          {
            text: '사용자 관리',
            href: '/userManage',
          },
          {
            text: '통역사 관리',
            href: '/interpreterManage',
          },
        ]}
      />
    </Flex>
  );
};

export default DefaultSidebar;
