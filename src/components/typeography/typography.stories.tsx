import * as React from "react";

import {Heading, Text, Title} from "./index";

export default { title: 'Typography' };

export const heading = () => <Heading title='This is a title' />

export const text = () => <Text>This is some text</Text>
export const long_text = () => <Text>
    This is some text spread over
    multiple lines.
</Text>

export const page_example = () => <>
    <Heading title='This is a top level heading' />
    <Title title='This a content title' />
    <Text>This is some text</Text>
    <Text>This is some text</Text>
    <Text>This is some text</Text>
    </>