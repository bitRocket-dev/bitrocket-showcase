/** @format */

import { FC } from 'react';

import { ButtonGithub } from './partials/ButtonGithub';

export interface Props {
  text: string;
}

export const UIButtonGithub: FC<Props> = ({ text }): JSX.Element => {
  return <ButtonGithub label={text} />;
};
