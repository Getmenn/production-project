import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            first: 'Олег',
            lastname: 'Королев',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Оренбург',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
};
Primary.decorators = [StoreDecorator({})];

export const WhithError: Story = {
    args: {
        error: 'true',
    },
};
WhithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
Loading.decorators = [StoreDecorator({})];
