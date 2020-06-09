import * as React from 'react';

import { Heading, Text, Title } from './index';

export default { title: 'Typography' };

export const heading = () => <Heading title="This is a title" />;

export const text = () => <Text>This is some text</Text>;
export const long_text = () => (
  <Text>This is some text spread over multiple lines.</Text>
);

export const page_example = () => (
  <>
    <Heading title="This is a top level heading" />
    <Title title="This a content title" />
    <Text>This is some text</Text>
    <Text>This is some text</Text>
    <Text>This is some text</Text>
  </>
);

export const symantic_html = () => (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <code>Code Block</code>
    <pre>Pre Tag Second Line 3rd Line</pre>
    <p>
      This is a paragraph of text.
      <br /> With a second line.
    </p>
    <p>
      This is a paragraph of text. <br /> With a second line.
    </p>
    <p>
      This is a paragraph of text. <br />
      With a second line.
    </p>
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>
  </>
);
