import * as React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import { Text } from '../components/typeography';
import { Box, Card } from '../components/cards';

import HeroLayout from '../layouts/hero';
import { IFluidObject } from 'gatsby-background-image';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        sections: { link: string; title: string }[];
      };
    };
    file: {
      childImageSharp: { fluid: IFluidObject };
    };
  };
}
const index = (props: IndexPageProps) => {
  return (
    <HeroLayout
      siteTitle={props.data.site.siteMetadata.title}
      sections={props.data.site.siteMetadata.sections}
    >
      <Box>
        <Card
          title="Storybook"
          backgroundImageFluid={props.data.file.childImageSharp.fluid}
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
    site {
      siteMetadata {
        title
        sections {
          link
          title
        }
      }
    }
    file(relativePath: { eq: "storybook.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
