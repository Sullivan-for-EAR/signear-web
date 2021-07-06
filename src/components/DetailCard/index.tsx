import React from 'react';
import Box from '@/components/Box';
import Flex from '@/components/Flex';

const DetailCard: React.FC = () => {
  return (
    <Box backgroundColor="white" borderRadius="8px">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb="8px"
        px="32px"
        pt="32px"
      >
        <Box fontSize="19px" fontWeight="700">
          공지사항
        </Box>
        <Box fontSize="14px" color="blue">
          더보기
        </Box>
      </Flex>
      <Box fontSize="12px" px="32px" mb="18px">
        담당지역
      </Box>
      <Flex
        p="20px 32px"
        borderBottom="1px solid #DFE0EB"
        justifyContent="space-between"
      >
        <Box>이어 서비스 사용가이드</Box>
        <Box color="#9FA2B4">오늘</Box>
      </Flex>
      <Flex
        p="20px 32px"
        borderBottom="1px solid #DFE0EB"
        justifyContent="space-between"
      >
        <Box>이어 서비스 사용가이드</Box>
        <Box color="#9FA2B4">오늘</Box>
      </Flex>
      <Flex
        p="20px 32px"
        borderBottom="1px solid #DFE0EB"
        justifyContent="space-between"
      >
        <Box>이어 서비스 사용가이드</Box>
        <Box color="#9FA2B4">오늘</Box>
      </Flex>
      <Flex
        p="20px 32px"
        borderBottom="1px solid #DFE0EB"
        justifyContent="space-between"
      >
        <Box>이어 서비스 사용가이드</Box>
        <Box color="#9FA2B4">오늘</Box>
      </Flex>
    </Box>
  );
};

export default DetailCard;
