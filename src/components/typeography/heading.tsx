import * as React from 'react';
import './headings.css';
import '../../layouts/index.css';

export interface HeadingProps {
  title: String;
}

export const Heading = ({ title }: HeadingProps) => (
  <h1
    className="heading
            tablet:text-blue-500
            laptop:text-yellow-500
            desktop:text-purple-500  desktop:text-5xl
            widescreen:text-red-500 widescreen:text-6xl
        "
  >
    {title}
  </h1>
);
