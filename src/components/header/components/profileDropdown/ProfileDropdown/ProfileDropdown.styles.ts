import { DownOutlined } from '@ant-design/icons';
import { media } from '../../../../../styles/themes/constants';
import { HeaderActionWrapper } from '../../../Header.styles';
import styled from 'styled-components';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;

  @media only screen and ${media.md} {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: var(--text-secondary-color);

  @media only screen and ${media.md} {
    color: var(--text-main-color);
  }
`;
