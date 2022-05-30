import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/helpers/test-utils'
import Main from '@/components/main/index'

describe('<Main />', () => {
  it('should render head', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(screen.getByText('React Avançado').parentElement).toHaveStyle({
      backgroundColor: '#363949'
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="sc-bczRLJ hgkctY"
      >
        <h1>
          React Avançado
        </h1>
      </main>
    `)
  })
})
