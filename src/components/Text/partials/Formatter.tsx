/** @format */

import { FC, memo } from 'react';

export type TFontTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
interface Props {
  text?: string;
  dataCy?: string;
  size?: string;
  color?: string;
  weight?: string;
  tag?: TFontTag;
  className?: string;
}

export const Formatter: FC<Props> = memo(
  ({ text, dataCy, tag: Tag = 'p', className }: Props): JSX.Element => (
    <Tag className={className} data-cy={dataCy}>
      {text}
    </Tag>
  ),
);
Formatter.displayName = 'Formatter';
