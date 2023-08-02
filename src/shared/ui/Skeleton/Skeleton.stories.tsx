import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    args: {

    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleGreen: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
CircleGreen.decorators = [ThemeDecorator(Theme.GREEN)];
