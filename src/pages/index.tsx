import * as React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import { Text } from '../components/typeography';
import { Box, Card } from '../components/cards';

import HeroLayout from '../layouts/hero';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        sections: { link: string; title: string }[];
      };
    };
    file: {
      childImageSharp: { fluid: object };
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
          <Link to="/storybook/">View the Storybook for this theme.</Link>
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
