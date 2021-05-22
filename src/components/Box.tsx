import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  border,
  shadow,
  typography,
  position,
  grid,
  compose,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
  TypographyProps,
  PositionProps,
  GridProps,
  system,
} from 'styled-system';

export type BoxProps =
  | SpaceProps
  | ColorProps
  | LayoutProps
  | FlexboxProps
  | BorderProps
  | ShadowProps
  | TypographyProps
  | PositionProps
  | GridProps
  | (React.HTMLProps<HTMLElement> & { as?: React.ElementType })
  | { cursor?: string }
  | { wordBreak?: string; overflowWrap?: string; whiteSpace?: string }
  | { variant?: string }
  | { transform?: string }
  | { objectFit?: string }
  | { outline?: string; resize?: string };

const blacklist = [
  'display',
  'color',
  'width',
  'height',
  'overflow',
  'cursor',
  'transform',
  'order',
  'fontSize',
  'fontFamily',
  'fontWeight',
];

const cursor = system({ cursor: true });
const lineBreak = system({
  wordBreak: true,
  overflowWrap: true,
  whiteSpace: true,
});
const transform = system({ transform: true });
const objectFit = system({ objectFit: true });
const form = system({ outline: true, resize: true });

const Box: React.FC<BoxProps> = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !blacklist.includes(prop) && defaultValidatorFn(prop),
})(
  {
    margin: 0,
  },
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    shadow,
    typography,
    position,
    grid,
    cursor,
    lineBreak,
    transform,
    objectFit,
    form
  )
);

export default Box;
