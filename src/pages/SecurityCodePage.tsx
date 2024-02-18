import React from 'react';
import { useTranslation } from 'react-i18next';
import { SecurityCodeForm } from '../components/auth/SecurityCodeForm/SecurityCodeForm';
import { PageTitle } from '../components/common/PageTitle/PageTitle';

const SecurityCodePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.securityCode')}</PageTitle>
      <SecurityCodeForm />
    </>
  );
};

export default SecurityCodePage;
