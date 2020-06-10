import * as React from 'react';
import '../../layouts/index.css';
import { Card, CardProps } from './card';

export interface BoxProps {
  children: React.ReactElement<CardProps>[] | React.ReactElement<CardProps>;
}

export const Box = ({ children }: BoxProps) => (
  <div
    className="
    tablet:flex
    tablet:flex-wrap"
  >
    {children}
  </div>
);
