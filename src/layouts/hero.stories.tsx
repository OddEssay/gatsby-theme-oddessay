import * as React from 'react';
import HeroLayout  from './hero';
import {graphql} from "gatsby";
export default { title: 'HeroLayout' };

const exampleSections = [
    {title: 'A menu item', link: '/a-menu-item'},
    {title: 'A second item', link: '/a-3nd-item'},
    {title: 'A middle item', link: '/a-middle-item'},
    {title: 'A last item', link: '/a-last-item'}
]

export const hero = () => <HeroLayout
    siteTitle='An example site title'
    sections={exampleSections}
 >

</HeroLayout>
