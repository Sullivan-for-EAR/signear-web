import React from 'react';
import Flex from '@/components/Flex';
import Box from '@/components/Box';

interface TableContentProps {
  title: string;
}

const TableContent: React.FC<TableContentProps> = ({ title }) => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="white"
      flex="1 0 auto"
      borderRadius="8px"
    >
      <Box m="32px">{title}</Box>
    </Flex>
  );
};

export default TableContent;
