import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const whithError: Story = {};
whithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading: Story = {};
Primary.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
