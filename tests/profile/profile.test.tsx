import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/helpers/test-utils'
import Profile from '@/components/profile/index'

describe('<Profile />', () => {
  it('should render the Profile', () => {
    renderWithTheme(<Profile />)
  })
})
