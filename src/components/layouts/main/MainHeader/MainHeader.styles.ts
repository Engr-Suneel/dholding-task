import { LAYOUT, media } from '../../../../styles/themes/constants';
import { BaseLayout } from '../../../common/BaseLayout/BaseLayout';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Header = styled(BaseLayout.Header)<Header>`
  line-height: 1.5;

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
