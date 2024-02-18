import { media } from '../../../../styles/themes/constants';
import { BaseLayout } from '../../../common/BaseLayout/BaseLayout';
import styled from 'styled-components';

export const LayoutMaster = styled(BaseLayout)`
  height: 100vh;
`;

export const LayoutMain = styled(BaseLayout)`
  @media only screen and ${media.md} {
    margin-left: 80px;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;
