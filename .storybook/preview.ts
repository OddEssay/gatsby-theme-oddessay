import { configure } from '@storybook/react';
import '../src/layouts/index.css'
// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module)
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
    withInfo({
        styles: {
            header: {
                h1: {
                    marginRight: '20px',
                    fontSize: '25px',
                    display: 'inline',
                },
                body: {
                    paddingTop: 0,
                    paddingBottom: 0,
                },
                h2: {
                    display: 'inline',
                    color: '#999',
                },
            },
            infoBody: {
                backgroundColor: '#eee',
                padding: '0px 5px',
                lineHeight: '2',
            },
        },
        inline: true,
        source: true,
    })
);
global.__PATH_PREFIX__ = ""