import React from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonMaterialUI from './ButtonMaterialUI';

export default {
    title: 'ButtonMaterialUI',
    component: ButtonMaterialUI,
} as Meta;

const Template: Story = (args) => <ButtonMaterialUI {...args} />

export const Primary = Template.bind({});

Primary.args = {
    disabled: false,
    label: 'Button',
    height: 70,
    width: 120,
};


