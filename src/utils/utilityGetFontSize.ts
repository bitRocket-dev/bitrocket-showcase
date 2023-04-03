/** @format */

import { TSize } from './declaration';

export const utilityGetFontSize = (size: TSize): { fontSize: number } => {
  switch (size) {
    case 'sm':
      return { fontSize: 16 };
    case 'md':
      return { fontSize: 20 };
    case 'lg':
      return { fontSize: 24 };
    default:
      console.error(`Size ${size} is not valid. Font size default passed 16`);
      return { fontSize: 16 };
  }
};
