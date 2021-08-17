import React from 'react';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';

const Reservation: React.FC = () => {
  return (
    <Flex flexDirection="column" flex="1">
      <TableContent />
    </Flex>
  );
};

export default Reservation;
