import styled from 'styled-components';

import Box, { BoxProps } from '../../components/Box';

const Flex = styled(Box)<BoxProps>({
  display: 'flex',
});

export default Flex;

export const Row = styled(Flex).attrs({
  flexWrap: 'wrap',
})<BoxProps>``;

export const Column = styled(Flex).attrs({
  flexDirection: 'column',
})<BoxProps>``;
