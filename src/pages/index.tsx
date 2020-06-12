import * as React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import { Text } from '../components/typeography';
import { Box, Card } from '../components/cards';

import HeroLayout, { HeroLayoutProps } from '../layouts/hero';
import { IFluidObject } from 'gatsby-background-image';
import { SiteInformation } from '../layouts/base';

interface IndexPageProps {
  data: {
    siteInformation: SiteInformation;
    file: {
      childImageSharp: { fluid: IFluidObject };
    };
  };
}
const index: React.FunctionComponent<IndexPageProps> = ({
  data: { file, siteInformation },
}) => {
  return (
    <HeroLayout siteInformation={siteInformation}>
      <Box>
        <Card
          title="Storybook"
          backgroundImageFluid={file.childImageSharp.fluid}
        >
          <a href="/storybook/">View the Storybook for this theme.</a>
        </Card>
      </Box>
    </HeroLayout>
  );
};

export default index;

export const pageQuery = graphql`
  query IndexQuery {
    ...SiteInformation
    file(relativePath: { eq: "storybook.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
