import { memo, SVGAttributes } from 'react'

import { Circle, Component } from './styles'

const Spinner = ({ ...props }: SVGAttributes<SVGSVGElement>) => (
  <Component aria-label="Loading" viewBox="0 0 50 50" {...props}>
    <Circle cx="25" cy="25" r="20"></Circle>
  </Component>
)

export default memo(Spinner)
