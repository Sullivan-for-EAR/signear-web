import React from 'react';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';

const Reservation: React.FC = () => {
  return (
    <Flex flexDirection="column" flex="1">
      <TableContent title="예약 현황" />
    </Flex>
  );
};

export default Reservation;
