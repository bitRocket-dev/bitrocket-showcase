/** @format */

import ButtonCTA from '../components/buttons/ButtonCTA';
export default {
  title: 'Buttons',
  component: ButtonCTA,
};

const onClick = () => {};

export const RainbowButton = () => <ButtonCTA label="Test" onClick={onClick} />;
