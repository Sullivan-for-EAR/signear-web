import React from 'react';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';

const TodayEars: React.FC = () => {
  return (
    <Flex flexDirection="column" flex="1">
      <TableContent title="오늘의 이어" />
    </Flex>
  );
};

export default TodayEars;

