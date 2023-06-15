import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { AppLink, AppLinkProps, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {

    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<AppLinkProps>;

export const Primary: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Red: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};

export const Secondary: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

// ============================= Dark

export const PrimaryDark: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
