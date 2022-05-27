import { render, screen } from '@testing-library/react'
import Main from '@/components/main/index'

describe('<Main />', () => {
  it('should render head', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
