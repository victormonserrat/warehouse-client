import styled from 'styled-components'

import DefaultSpinner from '~/infrastructure/components/Spinner'

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const Spinner = styled(DefaultSpinner)`
  width: 4rem;
`
