import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../hooks';
import { doVerifySecurityCode } from '../../../stores/slices/auth.slice';
import { notificationController } from '../../../controllers';
import VerifyEmailImage from '../../../assets/images/verify-email.webp';
import { BaseForm } from '../../common/forms/BaseForm/BaseForm';
import { VerificationCodeInput } from '../../common/inputs/VerificationCodeInput/VerificationCodeInput';
import { BaseImage } from '../../common/BaseImage/BaseImage';
import { BaseSpin } from '../../common/BaseSpin/BaseSpin';
import * as Auth from '../../layouts/AuthLayout/AuthLayout.styles';
import * as S from './SecurityCodeForm.styles';

interface SecurityCodeFormProps {
  onBack?: () => void;
  onFinish?: () => void;
}

export const SecurityCodeForm: React.FC<SecurityCodeFormProps> = ({ onBack, onFinish }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const navigateBack = useCallback(() => navigate(-1), [navigate]);
  const navigateForward = useCallback(() => navigate('/auth/new-password'), [navigate]);

  const [securityCode, setSecurityCode] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (securityCode.length === 6) {
      setLoading(true);
      dispatch(doVerifySecurityCode({ code: securityCode }))
        .unwrap()
        .then(onFinish || navigateForward)
        .catch((err) => {
          notificationController.error({ message: err.message });
          setLoading(false);
        });
    }
  }, [securityCode, navigateForward, onFinish, dispatch]);

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" requiredMark="optional">
        <Auth.BackWrapper onClick={onBack || navigateBack}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <S.ContentWrapper>
          <S.ImageWrapper>
            <BaseImage src={VerifyEmailImage} alt="Not found" preview={false} />
          </S.ImageWrapper>
          <Auth.FormTitle>{t('securityCodeForm.title')}</Auth.FormTitle>
          <S.VerifyEmailDescription>{t('common.verifCodeSent')}</S.VerifyEmailDescription>
          {isLoading ? <BaseSpin /> : <VerificationCodeInput autoFocus onChange={setSecurityCode} />}
          <Link to="/" target="_blank">
            <S.NoCodeText>{t('securityCodeForm.noCode')}</S.NoCodeText>
          </Link>
        </S.ContentWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
