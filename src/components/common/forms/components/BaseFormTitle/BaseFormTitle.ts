import styled from 'styled-components';
import { media } from '../../../../../styles/themes/constants';
import { BaseTypography } from '../../../BaseTypography/BaseTypography';

export const BaseFormTitle = styled(BaseTypography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${media.md} {
    font-size: 1.125rem;
  }
`;
