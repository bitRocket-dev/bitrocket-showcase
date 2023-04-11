/** @format */

import { FC, memo } from 'react';

import { Typography } from './partials/Typography';
import { utilityCreatePropsByVariant } from '../../utils/utilityCreatePropsByVariant';

export interface Props {
  text: string;
  variant?: string;
  color?: string;
  dataCy?: string;
  noWrap?: boolean;
  underline?: boolean;
}

export const UIText: FC<Props> = memo(
  ({ text, variant = 'caption', color = 'primary', dataCy, noWrap = true, underline }: Props): JSX.Element => {
    const props = utilityCreatePropsByVariant(variant);

    return <Typography text={text} color={color} dataCy={dataCy} noWrap={noWrap} {...props} underline={underline} />;
  },
);

UIText.displayName = 'UIText';
