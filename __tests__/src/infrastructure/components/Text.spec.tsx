import { BodyLarge, BodySmall, H1 } from '~/infrastructure/components/Text'
import { render } from '~/tests/utils'

describe('Body Large', () => {
  it('renders correctly', () => {
    const { container } = render(<BodyLarge>Jest</BodyLarge>)

    expect(container).toMatchSnapshot('Regular')
  })
})

describe('Body Small', () => {
  it('renders correctly', () => {
    const { container } = render(<BodySmall>Jest</BodySmall>)

    expect(container).toMatchSnapshot('Regular')
  })
})

describe('Heading 1', () => {
  it('renders correctly', () => {
    const { container } = render(<H1>Jest</H1>)

    expect(container).toMatchSnapshot('Regular')
  })
})
