import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Profile from '.'

export default {
  title: 'Profile',
  component: Profile
} as ComponentMeta<typeof Profile>

export const Default: ComponentStory<typeof Profile> = () => <Profile />
