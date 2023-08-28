import styled from 'styled-components'

const Input = styled.input`
  box-shadow: 0 0.0625rem 0 ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.sizes.medium};
  padding: 0.25rem 0;
  width: 100%;

  :focus {
    box-shadow: 0 0.125rem 0 ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }

  &[aria-invalid='true'] {
    box-shadow: 0 0.125rem 0 ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }

  :disabled {
    box-shadow: 0 0.0625rem 0 ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greyLight};
  }
`

export default Input
