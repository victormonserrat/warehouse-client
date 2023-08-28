import styled, { css } from 'styled-components'

export const BodyLargeStyles = css`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: bold;
  text-transform: uppercase;
`

export const BodyLarge = styled.div`
  ${BodyLargeStyles}
`

export const BodySmallStyles = css`
  color: ${({ theme }) => theme.colors.greyDark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.sizes.small};
`

export const BodySmall = styled.div`
  ${BodySmallStyles}
`

export const H1Styles = css`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.sizes.xl};
  font-weight: bold;
`

export const H1 = styled.h1`
  ${H1Styles}
`
