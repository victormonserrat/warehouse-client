type Id = string

const fromString = (value: string): Id => value

const Id = {
  fromString,
} as const

export default Id
