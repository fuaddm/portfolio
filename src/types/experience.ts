import type { CardText } from './card';

export type Experience = CardText & {
  companyLogo: string;
  children?: CardText[];
};
