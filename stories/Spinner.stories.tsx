import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import SpinnerComponent from '~/infrastructure/components/Spinner'

export default {
  component: SpinnerComponent,
  title: 'Atoms/Spinner',
} as ComponentMeta<typeof SpinnerComponent>

const Template: ComponentStory<typeof SpinnerComponent> = (args) => (
  <SpinnerComponent style={{ width: '4rem' }} {...args} />
)

export const Spinner = Template.bind({})
