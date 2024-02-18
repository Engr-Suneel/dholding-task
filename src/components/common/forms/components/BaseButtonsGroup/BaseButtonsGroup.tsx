import React from 'react';
import { BaseButton, BaseButtonProps } from '../../../BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../../BaseRow/BaseRow';
import { BaseCol } from '../../../BaseCol/BaseCol';

interface BaseButtonsGroupProps extends BaseButtonProps {
  className?: string;
  onCancel: () => void;
  loading?: boolean;
}

export const BaseButtonsGroup: React.FC<BaseButtonsGroupProps> = ({ className, onCancel, loading, ...props }) => {
  const { t } = useTranslation();

  return (
    <BaseRow className={className} gutter={[10, 10]} wrap={false}>
      <BaseCol span={12}>
        <BaseButton block type="default" ghost onClick={onCancel} {...props}>
          {t('common.cancel')}
        </BaseButton>
      </BaseCol>
      <BaseCol span={12}>
        <BaseButton block type="primary" loading={loading} htmlType="submit" {...props}>
          {t('common.save')}
        </BaseButton>
      </BaseCol>
    </BaseRow>
  );
};
