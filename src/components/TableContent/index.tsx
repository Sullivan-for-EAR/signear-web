import React from 'react';
import Flex from '@/components/Flex';
import Box from '@/components/Box';
import Grid from '@/components/Grid';

interface TableContentProps {
  title: string;
}

const tableData = [
  {
    id: 1,
    text: 'first',
    name: 'kim',
    date: '2021-11-11',
    status: '예약 완료',
  },
  {
    id: 2,
    text: 'second',
    name: 'lee',
    date: '2021-11-12',
    status: '예약 신청',
  },
  {
    id: 3,
    text: 'third',
    name: 'choi',
    date: '2021-11-13',
    status: '예약 신청',
  },
];

const TableContent: React.FC<TableContentProps> = ({ title }) => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="white"
      flex="1 0 auto"
      borderRadius="8px"
      border="1px solid #DFE0EB"
    >
      <Box m="32px">{title}</Box>
      <Grid
        pb="12px"
        borderBottom="1.5px solid #DFE0EB"
        color="#9FA2B4"
        fontWeight="700"
      >
        <Flex gridColumn="1 / 7">내용</Flex>
        <Flex gridColumn="7 / 9">예약자</Flex>
        <Flex gridColumn="9 / 11">날짜</Flex>
        <Flex gridColumn="11 / -1">상태</Flex>
      </Grid>

      {tableData.map((data) => (
        <Grid key={data.id} py="28px" borderBottom="1px solid #DFE0EB">
          <Flex flexDirection="column" gridColumn="1 / 7">
            <Box>{data.text}</Box>
            <Box mt="4px">수어통역</Box>
          </Flex>
          <Flex flexDirection="column" gridColumn="7 / 9">
            <Box>{data.name}</Box>
            <Box mt="4px">010-1234-5678</Box>
          </Flex>
          <Flex flexDirection="column" gridColumn="9 / 11">
            <Box>{data.date}</Box>
            <Box mt="4px">11:00 ~ 12:00</Box>
          </Flex>
          <Flex gridColumn="11 / -1" alignItems="center">
            {data.status}
          </Flex>
        </Grid>
      ))}
    </Flex>
  );
};

export default TableContent;
