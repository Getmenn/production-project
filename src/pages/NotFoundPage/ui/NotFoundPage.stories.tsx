import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'page/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
