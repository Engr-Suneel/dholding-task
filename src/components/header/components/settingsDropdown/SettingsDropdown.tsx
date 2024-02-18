import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { BaseButton } from '../../../common/BaseButton/BaseButton';
import { BasePopover } from '../../../common/BasePopover/BasePopover';
import { HeaderActionWrapper } from '../../Header.styles';
import { SettingsOverlay } from './settingsOverlay/SettingsOverlay/SettingsOverlay';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover content={<SettingsOverlay />} trigger="click" onOpenChange={setOpened}>
      <HeaderActionWrapper>
        <BaseButton type={isOpened ? 'default' : 'text'} icon={<SettingOutlined />} />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
