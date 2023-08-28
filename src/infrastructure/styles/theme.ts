const theme = {
  colors: {
    black: 'var(--color-black)',
    blue: 'var(--color-blue)',
    blueDark: 'var(--color-blue-dark)',
    blueLight: 'var(--color-blue-light)',
    grey: 'var(--color-grey)',
    greyDark: 'var(--color-grey-dark)',
    greyLight: 'var(--color-grey-light)',
    red: 'var(--color-red)',
    white: 'var(--color-white)',
  },
  fonts: {
    primary: 'var(--font-primary)',
  },
  sizes: {
    large: '1.25rem',
    medium: '1rem',
    small: '0.875rem',
    xl: '1.5rem',
    xs: '0.75rem',
  },
}

export type Theme = typeof theme

export default theme
