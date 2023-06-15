import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { Button, ButtonProps, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    // tags: ['autodocs'],
    // argTypes: {
    //     // backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

// ============================= Dark

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
