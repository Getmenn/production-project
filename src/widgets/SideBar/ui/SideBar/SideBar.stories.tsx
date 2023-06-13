import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
