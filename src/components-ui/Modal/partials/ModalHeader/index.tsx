/** @format */

import { FC, memo } from 'react';

import { CloseIcon } from './partials/CloseIcon';
import { Wrapper } from './partials/Wrapper';
import { UIIcon } from '../../../Icon';

interface Props {
  onClose: () => void;
}

export const ModalHeader: FC<Props> = memo(
  ({ onClose }): JSX.Element => (
    <Wrapper>
      <CloseIcon onClick={onClose}>
        <UIIcon icon="close" size="sm" />
      </CloseIcon>
    </Wrapper>
  ),
);

ModalHeader.displayName = 'ModalHeader';
