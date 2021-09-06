import React, { forwardRef } from 'react';
import Box, { BoxProps } from '@/components/Box';

export type InputProps = BoxProps & {
  name: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Box
    ref={ref}
    as="input"
    border="1px solid"
    borderColor="gray60"
    borderRadius="2px"
    fontSize={['16px', '15px']}
    padding="8px"
    {...props}
  />
));

Input.displayName = 'Input';

export default Input;
