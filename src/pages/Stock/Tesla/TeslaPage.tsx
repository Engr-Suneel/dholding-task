import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../../components/common/PageTitle/PageTitle';

const TeslaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.tesla')}</PageTitle>
    </>
  );
};

export default TeslaPage;
