import * as React from 'react';
import ReactMarkdown from 'react-remarkable';
import Page from './page';

export default { title: 'PageLayout' };

const markdown = `
# Markdown Heading One 

Some text 

## Markdown Heading Two 
\`\`\`ruby
class HelloWorld
  def say
    "This is a code sample"
  end
end 
\`\`\`
`;

export const hello_world = () => (
  <Page siteTitle="Hello World" pageTitle="Hi">
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </Page>
);
