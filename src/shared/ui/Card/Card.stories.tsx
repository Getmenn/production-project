import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    args: {

    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title="title" text="text" />,
    },
};
