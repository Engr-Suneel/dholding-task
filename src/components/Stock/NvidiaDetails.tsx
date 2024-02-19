import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import { BaseCard } from '../../components/common/BaseCard/BaseCard';
import { invidiaColumn } from '../../data-providers/invidia/invidia-column.data';
import { invidiaDataSource } from '../../data-providers/invidia/invidia.data';
import HistoryDataGrid from './HistoryData/HistoryDataGrid';

const NvidiaDetailsPage: React.FC = () => {

  const { t } = useTranslation();
  const columns: any = invidiaColumn;
  const dataSource: any = invidiaDataSource;

  return (
    <>
      <BaseRow gutter={[30, 30]}>
        <BaseCol span={16}>
          <BaseCard id="Nvidia History" title={t('stock.nvidia.title')} padding="1.25rem">
            <HistoryDataGrid columns={columns} dataSource={dataSource} />
          </BaseCard>
        </BaseCol>
        <BaseCol span={8}>
          <BaseCard id="Nvidia Market" padding="1.25rem">
            
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default NvidiaDetailsPage;
