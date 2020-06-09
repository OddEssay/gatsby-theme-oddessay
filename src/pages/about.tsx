import * as React from 'react';
import { graphql } from 'gatsby';
import Page from '../layouts/page';

const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle, sections },
    },
  },
}: {
  data: {
    site: {
      siteMetadata: {
        title: string;
        sections: { link: string; title: string }[];
      };
    };
  };
}) => {
  return (
    <Page siteTitle={siteTitle} pageTitle="About" sections={sections}>
      <h2>About</h2>
    </Page>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        sections {
          link
          title
        }
      }
    }
  }
`;

export default AboutPage;
