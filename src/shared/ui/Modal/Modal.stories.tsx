import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    // tags: ['autodocs'],
    // argTypes: {
    //     // backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Text Text Text',
    },
};
