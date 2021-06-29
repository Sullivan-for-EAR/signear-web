import React from 'react';
import Box from '@/components/Box';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';

const TodayEars: React.FC = () => {
  return (
    <Flex flexDirection="column" flex="1">
      <Box>타이틀</Box>
      <TableContent title="오늘의 이어" />
    </Flex>
  );
};

export default TodayEars;
