import React from 'react';
import { useTranslation } from 'react-i18next';
import { NewPasswordForm } from '../components/auth/NewPasswordForm/NewPasswordForm';
import { PageTitle } from '../components/common/PageTitle/PageTitle';

const NewPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.newPassword')}</PageTitle>
      <NewPasswordForm />
    </>
  );
};

export default NewPasswordPage;
