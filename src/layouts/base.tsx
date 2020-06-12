import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export interface SiteInformation {
  siteMetadata: {
    siteTitle: string;
    description: string;
    keywords: string;
    sections: Section[];
  };
}
export interface BaseProps {
  siteInformation: SiteInformation;
  pageTitle?: string;
}

export interface Section {
  title: string;
  link: string;
}
export const query = graphql`
  fragment SiteInformation on Query {
    siteInformation: site {
      siteMetadata {
        description
        keywords
        siteTitle: title
        sections {
          link
          title
        }
      }
    }
  }
`;

export const BaseLayout: React.FunctionComponent<BaseProps> = ({
  siteInformation: {
    siteMetadata: { siteTitle, description, keywords, sections },
  },
  children,
  pageTitle = false,
}) => {
  const title = pageTitle ? `${pageTitle} // ${siteTitle}` : siteTitle;
  return (
    <>
      <Helmet
        meta={[
          {
            name: 'description',
            content: description,
          },
          { name: 'keywords', content: keywords },
        ]}
        title={title}
      >
        <html lang="en" />
      </Helmet>
      {children}
    </>
  );
};

export default BaseLayout;
