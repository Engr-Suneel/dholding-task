import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import { teslaColumn } from '../../data-providers/tesla/tesla-column.data';
import { teslaDataSource } from '../../data-providers/tesla/tesla.data';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';

const TeslaDetailsPage: React.FC = () => {

  const { t } = useTranslation();
  const columns: any = teslaColumn;
  const dataSource: any = teslaDataSource;

  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol span={16}>
          <BaseCard id="Tesla History" title={t('stock.tesla.title')} padding="1.25rem">
            <HistoryDataGrid columns={columns} dataSource={dataSource} />
          </BaseCard>
        </BaseCol>
        <BaseCol span={8}>
          <BaseCard id="Tesla Market" padding="1.25rem">
            
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default TeslaDetailsPage;
