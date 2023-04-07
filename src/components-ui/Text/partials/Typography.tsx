/** @format */

import styled from '@emotion/styled';

import { Formatter } from './Formatter';

interface Props {
  color: string;
  size: string;
  weight: string;
  transform?: string;
  noWrap?: boolean;
  underline?: boolean;
}

export const Typography = styled(Formatter)<Props>`
  color: ${({ color }: Props) => color};
  font-size: ${({ size }: Props) => size};
  font-weight: ${({ weight }: Props) => weight};
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ noWrap }: Props) => !noWrap && 'white-space no-wrap ;'}
  ${({ transform }: Props) => transform && 'text-transform: uppercase'};
  ${({ underline }: Props) => underline && 'text-decoration: underline;'}
`;

Typography.displayName = 'Typography';
