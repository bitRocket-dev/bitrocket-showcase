/** @format */

import { TSize } from './declarations';

export const utilityGetSizes = (size: TSize): { width: number; height: number } => {
  switch (size) {
    case 'sm':
      return { width: 50, height: 50 };
    case 'md':
      return { width: 100, height: 100 };
    case 'lg':
      return { width: 150, height: 150 };
    default:
      console.error(`Size ${size} is not valid, default width 50 and default height 50`);
      return { width: 50, height: 50 };
  }
};
