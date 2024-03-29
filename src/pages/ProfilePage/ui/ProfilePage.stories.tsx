import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';

const meta = {
    title: 'page/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Олег',
            lastname: 'Королев',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Оренбург',
            username: 'admin',
        },
    },
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Олег',
            lastname: 'Королев',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Оренбург',
            username: 'admin',
        },
    },
})];
