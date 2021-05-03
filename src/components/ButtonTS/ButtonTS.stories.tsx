import React from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonTS from './index';

export default {
  title: 'ButtonTS',
  component: ButtonTS,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <ButtonTS {...args} />

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
  height: 20,
  width: 150,
};


