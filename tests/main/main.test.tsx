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
      .c0 {
        background-color: #363949;
        color: #7380ec;
        height: 100vh;
        text-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <main
        class="c0"
      >
        <img
          alt="Imagem de um atomo e react avançado escrito ao lado."
          class=""
          src="/img/logo.svg"
        />
        <h1
          class=""
        >
          React Avançado
        </h1>
      </main>
    `)
  })
})
