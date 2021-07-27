import React from 'react';
import Box from '@/components/Box';

interface LabelProps {
  text: '예약 확정' | '읽지 않음' | '예약 거절' | '긴급 통역';
}

const StatusColor = ({ text }: LabelProps) => {
  switch (text) {
    case '예약 확정':
      return { color: '#0A84FF', background: 'white' };
    case '읽지 않음':
      return { color: '#B6B6B6', background: 'white' };
    case '예약 거절':
      return { color: '#FF453A', background: 'white' };
    case '긴급 통역':
      return { color: 'white', background: '#FF453A' };
  }
};

const Label: React.FC<LabelProps> = ({ text }) => {
  const labelColor = StatusColor({ text });
  return (
    <Box
      p="4px 5px"
      fontSize="11px"
      borderRadius="3px"
      color={labelColor.color}
      border={`1px solid ${labelColor.color}`}
      backgroundColor={labelColor.background}
    >
      {text}
    </Box>
  );
};

export default Label;
