import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SocialLinks from '.'

export default {
  title: 'SocialLinks',
  component: SocialLinks
} as ComponentMeta<typeof SocialLinks>

export const Default: ComponentStory<typeof SocialLinks> = () => <SocialLinks />
