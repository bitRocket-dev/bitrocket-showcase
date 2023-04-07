/** @format */

import { TSize } from './declaration';

export const utilityGetSizes = (size: TSize): { width: number; height: number } => {
  switch (size) {
    case 'sm':
      return { width: 15, height: 15 };
    case 'md':
      return { width: 20, height: 20 };
    case 'lg':
      return { width: 25, height: 25 };
    default:
      console.error(`Size ${size} is not valid. Width default passed 15 `);
      return { width: 15, height: 15 };
  }
};
