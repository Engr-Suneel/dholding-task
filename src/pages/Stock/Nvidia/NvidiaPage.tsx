import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../../components/common/PageTitle/PageTitle';

const NvidiaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.nvidia')}</PageTitle>
    </>
  );
};

export default NvidiaPage;
