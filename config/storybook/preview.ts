import type { Preview } from '@storybook/react';
import React from 'react';
import { Story } from '@storybook/blocks';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider/ui/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export default preview;
