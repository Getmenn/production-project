import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description Description',
    },
};

export const TitleProps: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description Description',
    },
};

export const TextProps: Story = {
    args: {
        text: 'Text Text Text',
    },
};

// Dark

export const PrimaryDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description Description',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitlePropsDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description Description',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextPropsDark: Story = {
    args: {
        text: 'Text Text Text',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
