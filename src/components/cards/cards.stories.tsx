import * as React from 'react';

import { Box, Card } from './index';
import { Text } from '../typeography';

const data = {
  file: {
    childImageSharp: {
      fluid: {
        base64:
          'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAFnJ61Z3CWH/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECEQMSEzH/2gAIAQEAAQUCftI0JZHXR2pn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAEDAQE/Aco//8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQIBAT8BpT//xAAYEAACAwAAAAAAAAAAAAAAAAAAASAxQf/aAAgBAQAGPwJJlw0//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERITFBcYH/2gAIAQEAAT8hSFUTh6HMqWdFQl6ZLbolUu3T/9oADAMBAAIAAwAAABDE/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPxCj/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/ELCf/8QAHRABAAMAAQUAAAAAAAAAAAAAAQARITFBUWGBsf/aAAgBAQABPxDRE8NXuFC1VAMBWAiFU66cfEEF32NfJpIXIKf/2Q==',
        aspectRatio: 1.3333333333333333,
        src: '/static/595278c30960f089ec2ad6870e929560/14b42/iceland.jpg',
        srcSet:
          '/static/595278c30960f089ec2ad6870e929560/f836f/iceland.jpg 200w,\n/static/595278c30960f089ec2ad6870e929560/2244e/iceland.jpg 400w,\n/static/595278c30960f089ec2ad6870e929560/14b42/iceland.jpg 800w,\n/static/595278c30960f089ec2ad6870e929560/47498/iceland.jpg 1200w,\n/static/595278c30960f089ec2ad6870e929560/0e329/iceland.jpg 1600w,\n/static/595278c30960f089ec2ad6870e929560/10a43/iceland.jpg 4032w',
        srcWebp: '/static/595278c30960f089ec2ad6870e929560/58556/iceland.webp',
        srcSetWebp:
          '/static/595278c30960f089ec2ad6870e929560/61e93/iceland.webp 200w,\n/static/595278c30960f089ec2ad6870e929560/1f5c5/iceland.webp 400w,\n/static/595278c30960f089ec2ad6870e929560/58556/iceland.webp 800w,\n/static/595278c30960f089ec2ad6870e929560/99238/iceland.webp 1200w,\n/static/595278c30960f089ec2ad6870e929560/7c22d/iceland.webp 1600w,\n/static/595278c30960f089ec2ad6870e929560/9d54b/iceland.webp 4032w',
        sizes: '(max-width: 800px) 100vw, 800px',
      },
    },
  },
};

export default { title: 'Cards' };

export const single_card = () => (
  <Card>
    <Text>This is some text in a a card.</Text>
  </Card>
);

export const two_cards = () => (
  <Box>
    <Card title="A card title">
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
  </Box>
);
export const three_cards = () => (
  <Box>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
  </Box>
);

export const five_cards = () => (
  <Box>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
  </Box>
);

export const eight_cards = () => (
  <Box>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
  </Box>
);

export const eight_full_cards = () => (
  <Box>
    <Card
      title="This card has a title"
      footnote="A footnote"
      backgroundImageFluid={data.file.childImageSharp.fluid}
    >
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card
      title="A light image"
      backgroundImageFluid={data.file.childImageSharp.fluid}
    >
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card footnote="Just a footnote here">
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card title="Just a title here">
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card
      title="This card has a title"
      backgroundImageFluid={data.file.childImageSharp.fluid}
    >
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card title="A title" footnote="A footnote">
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card>
      <Text>This is some text in a a card.</Text>
    </Card>
    <Card backgroundImageFluid={data.file.childImageSharp.fluid}>
      <Text>This is some text in a a card.</Text>
    </Card>
  </Box>
);
