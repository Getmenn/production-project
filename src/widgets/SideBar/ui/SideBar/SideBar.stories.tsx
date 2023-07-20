import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { SideBar } from './SideBar';

const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(
    {
        user: { authData: {} },
    },
)];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(
    {
        user: { authData: {} },
    },
)];

export const NoAuth: Story = {};
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(
    {
        user: {},
    },
)];
