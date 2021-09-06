import React from 'react';

import Flex from '@/components/Flex';
import Box from '@/components/Box';
import Grid from '@/components/Grid';
import Label from '@/components/Label';
import Ellipsis from '@/components/Ellipsis';

import { ReactComponent as MoreIcon } from '../../images/icons-more.svg';

interface TabelDataType {
  id: number;
  text: string;
  name: string;
  date: string;
  purpose: string;
  status: '예약 확정' | '읽지 않음' | '예약 거절' | '긴급 통역';
}

interface TableContentType {
  tableData: TabelDataType[];
}

const TableContent: React.FC<TableContentType> = ({ tableData }) => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="white"
      flex="1 0 auto"
      borderRadius="8px"
    >
      <Grid
        p="12px 0 9px"
        borderBottom="1px solid"
        borderTop="1px solid"
        borderColor="#DFE0EB"
        backgroundColor="#F4F4F4"
        fontSize="15px"
      >
        <Flex gridColumn="1 / 2" justifyContent="center">
          NO
        </Flex>
        <Flex gridColumn="2 / 5" justifyContent="center">
          날짜 및 시간
        </Flex>
        <Flex gridColumn="5 / 7" justifyContent="center">
          담당자
        </Flex>
        <Flex gridColumn="7 / 11" justifyContent="center">
          내용
        </Flex>
        <Flex gridColumn="11 / 13" justifyContent="center">
          예약자
        </Flex>
        <Flex gridColumn="13 / 15" justifyContent="center">
          상태
        </Flex>
      </Grid>

      {tableData.map((data) => (
        <Grid key={data.id} py="28px" px="0" borderBottom="1px solid #DFE0EB">
          <Flex
            flexDirection="column"
            gridColumn="1 / 2"
            alignItems="center"
            justifyContent="center"
          >
            <Box>{data.id}</Box>
          </Flex>
          <Flex flexDirection="column" gridColumn="2 / 5" alignItems="center">
            <Box>{data.date}</Box>
            <Box mt="4px" color="#C5C7CD">
              {data.purpose}
            </Box>
          </Flex>
          <Flex flexDirection="column" gridColumn="5 / 7" alignItems="center">
            <Box>{data.name}</Box>
            <Box mt="4px" color="#C5C7CD">
              010-1234-5678
            </Box>
          </Flex>
          <Flex flexDirection="column" gridColumn="7 / 11" alignItems="center">
            <Box maxWidth="400px">
              <Ellipsis>{data.text}</Ellipsis>
            </Box>
            <Box mt="4px" color="#C5C7CD">
              수어통역
            </Box>
          </Flex>
          <Flex flexDirection="column" gridColumn="11 / 13" alignItems="center">
            <Box>{data.name}</Box>
            <Box mt="4px" color="#C5C7CD">
              010-1234-5678
            </Box>
          </Flex>
          <Flex
            gridColumn="13 / 15"
            alignItems="center"
            justifyContent="center"
          >
            <Label text={data.status} />
          </Flex>
          <Flex
            gridColumn="15 / -1"
            justifyContent="center"
            alignItems="center"
          >
            <MoreIcon />
          </Flex>
        </Grid>
      ))}
    </Flex>
  );
};

export default TableContent;
