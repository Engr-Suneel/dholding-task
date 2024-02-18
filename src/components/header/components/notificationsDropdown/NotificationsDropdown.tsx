import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { notifications as fetchedNotifications, Notification } from '../../../../api';
import { BaseButton } from '../../../common/BaseButton/BaseButton';
import { BaseBadge } from '../../../common/BaseBadge/BaseBadge';
import { BasePopover } from '../../../common/BasePopover/BasePopover';
import { NotificationsOverlay } from '../../components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { HeaderActionWrapper } from '../../Header.styles';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(fetchedNotifications);
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover
      trigger="click"
      content={<NotificationsOverlay notifications={notifications} setNotifications={setNotifications} />}
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <BaseButton
          type={isOpened ? 'default' : 'text'}
          icon={
            <BaseBadge dot>
              <BellOutlined />
            </BaseBadge>
          }
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
