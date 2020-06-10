import * as React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';
import { Heading, Title } from '../components/typeography';

import * as styles from './index.css';

interface HeroLayoutProps {
  children: any;
  siteTitle: string;
  sections: Section[];
}

interface Section {
  title: string;
  link: string;
}

interface SectionMenuItemProps {
  section: Section;
}

const isExternalUrl = (url: string) => url.includes('http');

const SectionMenuItem = ({ section }: SectionMenuItemProps) => (
  <div className="bg-gray-200 m-4 rounded shadow h-16">
    <Title title={section.title} />
    {isExternalUrl(section.link) ? (
      <a href={section.link}>{section.link}</a>
    ) : (
      <Link to={section.link}>{section.link}</Link>
    )}
  </div>
);

class HeroLayout extends React.PureComponent<HeroLayoutProps, void> {
  public render() {
    return (
      <div className="h-full">
        <Helmet
          title={this.props.siteTitle}
          meta={[
            {
              name: 'description',
              content:
                'The theme used across sites created by Paul Bennett-Freeman',
            },
            { name: 'keywords', content: 'gatsby theme' },
          ]}
        />
        <div className="w-full tablet:flex">
          <div className="w-full tablet:w-3/5">
            <div className="rounded shadow bg-gray-200  ml-12 mr-12 mt-4">
              <Heading title={this.props.siteTitle} />
            </div>
          </div>

          <div className="w-full tablet:w-2/5">
            {this.props.sections.map((section, i) => (
              <SectionMenuItem
                key={`section_${i}`}
                section={section}
              ></SectionMenuItem>
            ))}
          </div>
        </div>

        <div className="w-full">{this.props.children}</div>
      </div>
    );
  }
}

export default HeroLayout;
