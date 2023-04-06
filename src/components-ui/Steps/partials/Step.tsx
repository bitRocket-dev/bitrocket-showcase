/** @format */

import { FC, memo } from 'react';

interface Props {
  children: any;
  name: string;
}
export const UIStep: FC<Props> = memo(({ children }): JSX.Element => children);
UIStep.displayName = 'Step';
