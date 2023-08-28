import Spinner from '~/infrastructure/components/Spinner'
import { render } from '~/tests/utils'

describe('Spinner', () => {
  it('renders correctly', () => {
    const { container } = render(<Spinner />)

    expect(container).toMatchSnapshot('Regular')
  })
})
