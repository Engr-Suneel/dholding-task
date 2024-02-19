import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../../components/common/PageTitle/PageTitle';
import AppleDetailsPage from '../../../components/Stock/AppleDetails';

const ApplePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.apple')}</PageTitle>
      <AppleDetailsPage />
    </>
  );
};

export default ApplePage;
