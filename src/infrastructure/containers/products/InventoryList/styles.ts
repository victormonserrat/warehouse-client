import { Form as DefaultForm } from 'lib/formik/with-on-schema-change-validation'
import styled from 'styled-components'

import { BodySmall } from '~/infrastructure/components/Text'
import media from '~/infrastructure/styles/media'

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  padding: 2rem 1rem;

  ${media.desktop} {
    gap: 4rem;
    margin: 0 auto;
    max-width: 87.5rem;
    padding: 8rem 4rem;
  }
`

export const Form = styled(DefaultForm)`
  display: grid;
  gap: 1rem;
  grid-auto-rows: min-content;
  grid-template-columns: 1fr;
`

export const ImageContainer = styled.div`
  height: 25rem;
  position: relative;
`

export const Item = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.desktop} {
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
  }
`

export const List = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.desktop} {
    gap: 4rem;
  }
`

export const Stock = styled(BodySmall)`
  text-align: right;
`
