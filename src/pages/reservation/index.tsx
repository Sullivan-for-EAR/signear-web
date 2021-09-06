import React from 'react';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';
interface TabelDataType {
  id: number;
  text: string;
  name: string;
  date: string;
  purpose: string;
  status: '예약 확정' | '읽지 않음' | '예약 거절' | '긴급 통역';
}

const tableData: TabelDataType[] = [
  {
    id: 1,
    text: '신촌동주민센터',
    name: '김주영',
    date: '오전 10:00 ~ 오전 11:30',
    purpose: '수어 통역',
    status: '예약 확정',
  },
  {
    id: 2,
    text: '신한은행 이대역점',
    name: '이수영',
    date: '오전 11:00 ~ 오후 13:30',
    purpose: '화상 통역',
    status: '예약 거절',
  },
  {
    id: 3,
    text: '여의도역',
    name: '최보필',
    date: '오후 15:00 ~ 오후 17:30',
    purpose: '수어 통역',
    status: '읽지 않음',
  },
  {
    id: 4,
    text: '강남역 사거리',
    name: '박수현',
    date: '오후 19:00 ~ 오후 21:30',
    purpose: '화상 통역',
    status: '긴급 통역',
  },
];

const Reservation: React.FC = () => {
  return (
    <Flex flexDirection="column" flex="1">
      <TableContent tableData={tableData} />
    </Flex>
  );
};

export default Reservation;
