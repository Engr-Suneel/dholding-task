import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../../components/common/PageTitle/PageTitle';
import NvidiaDetailsPage from '../../../components/Stock/NvidiaDetails';

const NvidiaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.nvidia')}</PageTitle>
      <NvidiaDetailsPage />
    </>
  );
};

export default NvidiaPage;
