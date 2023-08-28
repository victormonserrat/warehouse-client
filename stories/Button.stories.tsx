import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import ButtonComponent from '~/infrastructure/components/Button'

export default {
  argTypes: {
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    onClick: {},
  },
  component: ButtonComponent,
  title: 'Atoms/Button',
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Storybook</ButtonComponent>
)

export const Button = Template.bind({})
