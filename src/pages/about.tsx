import * as React from 'react';
import { graphql } from 'gatsby';
import Page from '../layouts/page';

const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}: {
  data: {
    site: {
      siteMetadata: { title: string };
    };
  };
}) => {
  return (
    <Page siteTitle={siteTitle} pageTitle="About">
      <h2>About</h2>
    </Page>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
