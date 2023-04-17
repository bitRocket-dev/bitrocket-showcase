/** @format */

import { TFontTag } from '../components/Text/partials/Formatter';

interface TextProps {
  size: string;
  weight: string;
  tag: TFontTag;
  transform?: string;
}

export const utilityCreatePropsByVariant = (variant: string): TextProps => {
  switch (variant) {
    case 'display':
      return {
        tag: 'h1',
        weight: 'black',
        size: 'display',
      };
    case 'header':
      return {
        tag: 'h2',
        weight: 'black',
        size: 'header',
      };
    case 'title':
      return {
        tag: 'h3',
        weight: 'medium',
        size: 'title',
      };
    case 'subtitle':
      return {
        tag: 'h4',
        weight: 'bold',
        size: 'subtitle',
      };
    case 'caption':
      return {
        tag: 'p',
        weight: 'regular',
        size: 'caption',
      };
    default:
      return {
        tag: 'span',
        weight: 'regular',
        size: 'caption',
      };
  }
};
