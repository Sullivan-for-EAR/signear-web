import React from 'react';
import Flex from '@/components/Flex';
import TableContent from '@/components/TableContent';

import { useTest } from '@/hooks/useTest';

const Reservation: React.FC = () => {
  const data = useTest();
  console.log(data);
  return (
    <Flex flexDirection="column" flex="1">
      <TableContent />
    </Flex>
  );
};

export default Reservation;
