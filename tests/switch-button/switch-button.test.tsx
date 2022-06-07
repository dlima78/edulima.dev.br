import { screen } from '@testing-library/react'
import SwitchButton from '@/components/switch-button/index'
import { renderWithTheme } from '@/helpers/test-utils'

describe('<SwitchButton />', () => {
  it('should render head', () => {
    renderWithTheme(<SwitchButton />)
  })
})
