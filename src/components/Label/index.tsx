import React from 'react';
import Box from '@/components/Box';

interface LabelProps {
  text: '예약 확정' | '읽지 않음' | '예약 거절';
}

const StatusColor = ({ text }: LabelProps) => {
  switch (text) {
    case '예약 확정':
      return '#EF5DA8';
    case '읽지 않음':
      return '#FEC400';
    case '예약 거절':
      return '#E5E5E5';
  }
};

const Label: React.FC<LabelProps> = ({ text }) => {
  const labelColor = StatusColor({ text });
  return (
    <Box
      p="4px 12px"
      fontSize="11px"
      borderRadius="100px"
      fontWeight="700"
      color="white"
      backgroundColor={labelColor}
    >
      {text}
    </Box>
  );
};

export default Label;
