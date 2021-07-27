import Box, { BoxProps } from '@/components/Box';

import styled from 'styled-components';

const Wrapper = styled(Box).attrs<BoxProps>({
  display: 'flex',
  px: '20px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: 'maxWidth',
})<BoxProps>``;

export default Wrapper;
