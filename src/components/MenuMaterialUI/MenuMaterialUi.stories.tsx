import React from 'react';
import { Story, Meta } from '@storybook/react';
import MenuMaterialUi from './index';

export default {
  title: 'MenuMaterialUi',
  component: MenuMaterialUi,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <MenuMaterialUi {...args} />

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: "",
  label: 'MenuMaterialUi',
  height: 50,
  width: 150,
  textItem1: "Profile",
  textItem2: "My account",
  textItem3: "Logout",
};


