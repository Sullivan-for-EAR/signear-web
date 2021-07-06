import React from 'react';
import Box from '@/components/Box';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';
import Card from '@/components/Card';
import DetailCard from '@/components/DetailCard';

const TodayEars: React.FC = () => {
  return (
    <Flex flexDirection="column" flex="1">
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridColumnGap="30px"
        mb="12px"
      >
        <Card title="완료" count={3} color="red" />
        <Card title="완료" count={3} color="blue" />
        <Card title="완료" count={3} />
        <Card title="완료" count={3} />
      </Box>
      <TableContent title="오늘의 이어" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridColumnGap="30px"
        mt="18px"
      >
        <DetailCard />
        <DetailCard />
      </Box>
    </Flex>
  );
};

export default TodayEars;
