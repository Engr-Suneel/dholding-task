import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import { appleColumn } from '../../data-providers/apple/apple-column.data';
import { appleDataSource } from '../../data-providers/apple/apple.data';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';

const AppleDetailsPage: React.FC = () => {

  const { t } = useTranslation();
  const columns: any = appleColumn;
  const dataSource: any = appleDataSource;

  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol span={16}>
          <BaseCard id="Apple History" title={t('stock.apple.title')} padding="1.25rem">
            <HistoryDataGrid columns={columns} dataSource={dataSource} />
          </BaseCard>
        </BaseCol>
        <BaseCol span={8}>
          <BaseCard id="Apple Market" padding="1.25rem">
            
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default AppleDetailsPage;
