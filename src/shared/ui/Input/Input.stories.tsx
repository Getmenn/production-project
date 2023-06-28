import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<InputProps>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123',
    },
};
