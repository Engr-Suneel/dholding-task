import React from 'react';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { 
  useAppSelector,
  useResponsive
} from '../../../../../hooks';
import { BasePopover } from '../../../../common/BasePopover/BasePopover';
import { BaseCol } from '../../../../common/BaseCol/BaseCol';
import { BaseRow } from '../../../../common/BaseRow/BaseRow';
import { BaseAvatar } from '../../../../common/BaseAvatar/BaseAvatar';
import * as S from './ProfileDropdown.styles';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <BasePopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar src={user.imgUrl} alt="User" shape="circle" size={40} />
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <span>{`${user.firstName} ${user.lastName[0]}`}</span>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BasePopover>
  ) : null;
};
