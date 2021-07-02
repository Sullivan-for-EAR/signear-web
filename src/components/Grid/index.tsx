import styled from 'styled-components';

import { BoxProps } from '@/components/Box';

import Wrapper from '@/components/Wrapper';

const Grid = styled(Wrapper).attrs({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'auto',
  gridColumnGap: '12px',
})<BoxProps>``;

export default Grid;
