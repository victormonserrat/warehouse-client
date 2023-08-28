import Input from '~/infrastructure/components/Input'
import { render } from '~/tests/utils'

describe('Input', () => {
  it('renders correctly', () => {
    const { container } = render(<Input />)

    expect(container).toMatchSnapshot('Regular')
  })

  it('renders disabled correctly', () => {
    const { container } = render(<Input disabled />)

    expect(container).toMatchSnapshot('Disabled')
  })

  it('renders invalid correctly', () => {
    const { container } = render(<Input aria-invalid />)

    expect(container).toMatchSnapshot('Invalid')
  })
})
