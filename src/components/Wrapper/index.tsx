import Box, { BoxProps } from '@/components/Box';

import styled from 'styled-components';
import { variant } from 'styled-system';

const Wrapper = styled(Box).attrs<BoxProps>({
  display: 'flex',
})<BoxProps>(
  variant({
    variants: {
      default: {
        px: '32px',
      },
      desktopOnly: {
        px: [null, '32px'],
      },
    },
  })
);

Wrapper.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  variant: 'default',
  maxWidth: 'maxWidth',
};

export default Wrapper;
