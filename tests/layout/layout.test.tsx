import { render, screen } from '@testing-library/react'
import Layout from '@/components/layout/index'
import { renderWithTheme } from '@/helpers/test-utils'

describe('<Layout />', () => {
  it('should render head', () => {
    renderWithTheme(<Layout />)
  })
})
