import React from 'react';
import Flex from '@/components/Flex';
import Box from '@/components/Box';
const DefaultSidebar: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#363740"
      py="48px"
      minWidth="255px"
    >
      <Box>오늘의 이어</Box>
      <Box>예약관리</Box>
      <Box>사용자 관리</Box>
    </Flex>
  );
};

export default DefaultSidebar;
