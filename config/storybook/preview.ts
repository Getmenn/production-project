import '../../src/app/styles/index.scss';

import { Story } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import React from 'react';

import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider/ui/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

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
