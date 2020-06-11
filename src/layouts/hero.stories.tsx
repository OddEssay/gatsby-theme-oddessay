import * as React from 'react';
import HeroLayout from './hero';
import { graphql } from 'gatsby';
export default { title: 'HeroLayout' };

const exampleSections = [
  { title: 'A menu item', link: '/a-menu-item' },
  { title: 'A second item', link: '/a-3nd-item' },
  { title: 'A middle item', link: '/a-middle-item' },
  { title: 'A last item', link: '/a-last-item' },
];

const exampleSectionsWithExternal = [
  { title: 'External Secure', link: 'https://oddessay.com' },
  { title: 'External Unsecure', link: 'http://oddessay.com' },
  { title: 'Same Protocol', link: '//oddessay.com' },
];

export const hero = () => (
  <HeroLayout siteTitle="An example site title" sections={exampleSections}>
    <div>Hello World</div>
  </HeroLayout>
);

export const external = () => (
  <HeroLayout
    siteTitle="An example site title"
    sections={exampleSectionsWithExternal}
  >
    <div>Secure?</div>
  </HeroLayout>
);
