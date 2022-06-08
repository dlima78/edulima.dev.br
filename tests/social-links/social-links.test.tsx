import { render, screen } from '@testing-library/react'
import SocialLinks from '@/components/social-links/index'

describe('<SocialLinks />', () => {
  it('should render head', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('heading', { name: /SocialLinks/i })).toBeInTheDocument()
  })
})
