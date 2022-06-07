import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SwitchButton from '.'

export default {
  title: 'SwitchButton',
  component: SwitchButton
} as ComponentMeta<typeof SwitchButton>

export const Default: ComponentStory<typeof SwitchButton> = () => (
  <SwitchButton />
)
