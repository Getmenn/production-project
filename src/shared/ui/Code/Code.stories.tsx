import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '../../assets/tests/storybook.jpg';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    args: {

    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Normal = Template.bind({});',
    },
};
