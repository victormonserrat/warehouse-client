import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import InputComponent from '~/infrastructure/components/Input'

export default {
  args: {
    placeholder: 'Placeholder',
  },
  argTypes: {
    'aria-invalid': {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    onChange: {},
    placeholder: { table: { type: { summary: 'string' } }, type: 'string' },
  },
  component: InputComponent,
  title: 'Atoms/Input',
} as ComponentMeta<typeof InputComponent>

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
)

export const Input = Template.bind({})
