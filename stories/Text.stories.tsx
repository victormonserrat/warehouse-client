import React from 'react'

import {
  BodyLarge as BodyLargeComponent,
  BodySmall as BodySmallComponent,
  H1,
} from '~/infrastructure/components/Text'

export default {
  title: 'Atoms/Text',
}

export const Heading1 = () => <H1>Storybook</H1>

export const BodyLarge = () => (
  <BodyLargeComponent>Storybook</BodyLargeComponent>
)

export const BodySmall = () => (
  <BodySmallComponent>Storybook</BodySmallComponent>
)
