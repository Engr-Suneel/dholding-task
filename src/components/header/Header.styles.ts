import styled, { css } from 'styled-components';
import { LAYOUT, media } from '../../styles/themes/constants';
import { BurgerIcon } from '../common/Burger/BurgerIcon';
import { BaseCollapse } from '../common/BaseCollapse/BaseCollapse';
import { BaseCol } from '../common/BaseCol/BaseCol';
import { GitHubButton } from './components/GithubButton/GitHubButton';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(BaseCollapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(BaseCol)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: var(--text-main-color);

  ${(props) =>
    props.isCross &&
    css`
      color: var(--text-secondary-color);
    `};
`;

export const SearchColumn = styled(BaseCol)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumns {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(BaseCol)<ProfileColumns>`
  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;

export const GHButton = styled(GitHubButton)`
  display: none;

  @media only screen and ${media.lg} {
    display: block;
  }
`;
