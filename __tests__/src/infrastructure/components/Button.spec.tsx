import Button from '~/infrastructure/components/Button'
import { render } from '~/tests/utils'

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Jest</Button>)

    expect(container).toMatchSnapshot('Regular')
  })

  it('renders disabled correctly', () => {
    const { container } = render(<Button disabled>Jest</Button>)

    expect(container).toMatchSnapshot('Disabled')
  })
})
