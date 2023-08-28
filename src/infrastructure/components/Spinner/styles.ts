import styled from 'styled-components'

import { dash, rotate } from './keyframes'

export const Component = styled.svg`
  animation: ${rotate} 1.5s linear infinite;
`

export const Circle = styled.circle`
  animation: ${dash} 1.5s ease-in-out infinite;
  fill: none;
  stroke: ${({ theme }) => theme.colors.blue};
  stroke-linecap: round;
  stroke-width: 0.3125rem;
`
