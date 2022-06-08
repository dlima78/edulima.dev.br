import * as S from './styles'
import Icons from './icons'
import links from './content'
import { StyledIcon } from '@styled-icons/styled-icon'

const SocialLinks = () => (
  <S.Wrapper>
    <S.SocialLinksList>
      {links.map((links, i) => {
        const Icon = (Icons as Record<string, StyledIcon>)[links.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={links.url}
              title={links.label}
              target="_blank"
              rel="nooper noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.Wrapper>
)

export default SocialLinks
