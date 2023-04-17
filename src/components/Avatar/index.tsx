/** @format */

import { FC, memo } from 'react';

import { Image, Props as PropsImage } from './partials/Image';
import { Stack } from './partials/Stack';

export type Props = PropsImage;

export const UIAvatar: FC<Props> = memo(
  ({ src, username, size, borderColor = 'primary' }): JSX.Element => (
    <Stack>
      <Image src={src} username={username} size={size} borderColor={borderColor} />
    </Stack>
  ),
);
