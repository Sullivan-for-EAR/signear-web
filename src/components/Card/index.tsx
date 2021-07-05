import React from 'react';
import Box from '@/components/Box';
import Flex from '@/components/Flex';

interface CardProps {
  title: string;
  count: number;
  color?: string;
}

const Card: React.FC<CardProps> = ({ title, count, color }) => {
  return (
    <Flex
      flexDirection="column"
      p="24px 32px"
      backgroundColor="white"
      // minWidth="258px"
      textAlign="center"
      border={`1px solid ${color ? color : '#DFE0EB'}`}
      borderRadius="8px"
    >
      <Box mb="12px" fontSize="19px" color={color ? color : '#9FA2B4'}>
        {title}
      </Box>
      <Box fontSize="40px" color={color ? color : 'black'}>
        {count}
      </Box>
    </Flex>
  );
};

export default Card;
