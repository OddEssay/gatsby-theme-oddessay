import * as React from 'react';
import './card.css';
import '../../layouts/index.css';
import { Title } from '../typeography';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
export interface CardProps {
  title?: string;
  backgroundImage?: string;
  footnote?: string;
  children: React.ReactNode;
}

export default function CardBackgroundImage() {
  const data = {
    file: {
      childImageSharp: {
        fixed: {
          base64:
            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAf/EABYBAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAABpY4WlWhGM5PfAf/EABwQAAICAgMAAAAAAAAAAAAAAAABAhIDERQhMf/aAAgBAQABBQLoqVJSsuQxZdjJe7P/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBES/9oACAEDAQE/AYZf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEgAQ/9oACAECAQE/AVLf/8QAGRAAAQUAAAAAAAAAAAAAAAAAEAERICEi/9oACAEBAAY/AjphaQ//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMRBRQWFx/9oACAEBAAE/IXwcM04HWGd9Roq6TH2KLze2Z7iTaWn/2gAMAwEAAgADAAAAEDcv/f/EABcRAQADAAAAAAAAAAAAAAAAABABITH/2gAIAQMBAT8Qvgg//8QAFxEBAAMAAAAAAAAAAAAAAAAAEAEhMf/aAAgBAgEBPxCmmT//xAAdEAEAAwACAwEAAAAAAAAAAAABABEhMVFBYYGR/9oACAEBAAE/EGLF0KZdDXJEjtH2LzDS2rsfDDbR8DPfeIgIp8N1+S5tOe5gEV1Dsn//2Q==',
          width: 125,
          height: 125,
          src:
            '/static/85286dec8ad1e45033cb46c9bd73aebb/bac10/58f8558ecb60b4a114572f0cc78478d1.jpg',
          srcSet:
            '/static/85286dec8ad1e45033cb46c9bd73aebb/bac10/58f8558ecb60b4a114572f0cc78478d1.jpg 1x,\n/static/85286dec8ad1e45033cb46c9bd73aebb/1b59b/58f8558ecb60b4a114572f0cc78478d1.jpg 1.5x,\n/static/85286dec8ad1e45033cb46c9bd73aebb/034c8/58f8558ecb60b4a114572f0cc78478d1.jpg 2x',
        },
      },
    },
  };
  return <Img fixed={data.file.childImageSharp.fixed} />;
}

export const Card = ({
  title,
  backgroundImage,
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

      {backgroundImage && (
        <div
          className="card-content h-32 bg-cover"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        ></div>
      )}
      <div className="card-content h-32 bg-cover">
        <CardBackgroundImage />
      </div>
      <div className="card-content bg-gray-100">{children}</div>

      {footnote && (
        <div className="card-content bg-gray-300 italic text-right">
          {footnote}
        </div>
      )}
    </div>
  </div>
);
