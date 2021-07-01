import React from 'react';
import Box from '@/components/Box';
import Flex from '@/components/Flex';

const DefaultHeader: React.FC = () => {
  return (
    <Box mb="38px">
      <Flex justifyContent="space-between" alignItems="center" mb="8px">
        <Box fontSize="24px" fontWeight="700">
          헤더 타이틀
        </Box>
        <Box>데이터</Box>
      </Flex>
      <Box color="#9FA2B4">OOO님 에게 오늘 예약된 통역 목록입니다.</Box>
    </Box>
  );
};

export default DefaultHeader;
