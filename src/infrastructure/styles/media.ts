import keysOf from 'lib/keys-of'

export const breakpoints = {
  desktop: 1240,
  mobile: 640,
} as const

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`

const media = keysOf(breakpoints).reduce(
  (acc, key) => ({
    ...acc,
    [key]: minWidthQuery(breakpoints[key]),
  }),
  {} as { [key in keyof typeof breakpoints]: string },
)

export default media
