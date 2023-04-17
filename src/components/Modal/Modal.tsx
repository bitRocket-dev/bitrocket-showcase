/** @format */

import { FC, ReactNode, memo } from 'react';

import { Backdrop } from './partials/Backdrop';
import { Content } from './partials/Content';
import { Grow } from './partials/Grow';
import { ModalContent } from './partials/ModalContent';
import { ModalHeader } from './partials/ModalHeader';
import { Outer } from './partials/Outer';

export interface Props {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const UIModal: FC<Props> = memo(
  ({ children, onClose, isOpen }): JSX.Element => (
    <>
      {isOpen && (
        <Outer>
          <Backdrop />
          <Content>
            <Grow />
            <div>
              <ModalHeader onClose={onClose} />
              <ModalContent>{children}</ModalContent>
            </div>
            <Grow className={'onlyDS'} />
          </Content>
        </Outer>
      )}
    </>
  ),
);

UIModal.displayName = 'Modal';
