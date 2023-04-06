import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonType, Color } from '../enums';

export interface IAtmButton {
  text: string;
  size: string;
  color?: Color;
  disabled?: boolean;
  execute: () => void;
  icon?: IconDefinition;
  type?: ButtonType;
}
