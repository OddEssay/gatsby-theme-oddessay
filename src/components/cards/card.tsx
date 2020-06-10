import * as React from 'react';
import './card.css';
import '../../layouts/index.css';
import { Title } from '../typeography';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
export interface CardProps {
  title?: string;
  backgroundImageFluid?: IFluidObject;
  footnote?: string;
  children: React.ReactNode;
}

export const Card = ({
  title,
  backgroundImageFluid,
  footnote,
  children,
}: CardProps) => (
  <div className="block tablet:w-1/2 laptop:w-1/3 widescreen:w-1/4">
    <div className="shadow-md rounded m-10">
      {title && (
        <div className="card-content card-title bg-gray-300 text-center pt-px pb-px">
          <Title title={title} />
        </div>
      )}

      {backgroundImageFluid && (
        <BackgroundImage
          Tag="div"
          className="card-content h-32 bg-cover"
          fluid={backgroundImageFluid}
        ></BackgroundImage>
      )}

      <div className="card-content bg-gray-100">{children}</div>

      {footnote && (
        <div className="card-content bg-gray-300 italic text-right">
          {footnote}
        </div>
      )}
    </div>
  </div>
);
