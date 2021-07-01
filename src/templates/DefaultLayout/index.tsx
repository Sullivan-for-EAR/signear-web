import React from 'react';

import Flex from '@/components/Flex';
import DefaultSidebar from '@/components/DefaultSidebar';
import DefaultHeader from '@/components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flex="1">
      <DefaultSidebar />
      <Flex flexDirection="column" p="36px 33px" flex="1 0 auto">
        <DefaultHeader />
        {children}
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
