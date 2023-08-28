import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blueLight};
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: bold;
  padding: 1.25rem 2.5rem;
  width: 100%;
  transition: background-color 0.3s ease;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 0 0 0 0.0625rem ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greyLight};
  }
`
export default Button
