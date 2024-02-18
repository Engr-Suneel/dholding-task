import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/common/PageTitle/PageTitle';
import { References } from '../../components/common/References/References';
import { useResponsive } from '../../hooks';
import * as S from './DashboardPage.styles';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';

const MedicalDashboardPage: React.FC = () => {
  const { isTablet, isDesktop } = useResponsive();

  const { t } = useTranslation();

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17}>
        <BaseRow gutter={[30, 30]}>
          <BaseCol span={24}>
            <BaseRow gutter={[30, 30]}>
              <p>Staticstics Cards</p>
            </BaseRow>
          </BaseCol>

          <BaseCol id="map" span={24}>
            <p>Map Card</p>
          </BaseCol>

          <BaseCol id="latest-screenings" span={24}>
            <p>Screenings Card</p>
          </BaseCol>

          <BaseCol id="treatment-plan" xl={24}>
            <p>Treatment Card</p>
          </BaseCol>

          <BaseCol id="covid" xl={24}>
            <p>Covid Card</p>
          </BaseCol>

          <BaseCol id="activity" xl={24} xxl={12}>
            <p>Activity Card</p>
          </BaseCol>

          <BaseCol id="health" xl={24} xxl={12}>
            <p>Health Card</p>
          </BaseCol>

          <BaseCol id="favorite-doctors" xl={24}>
            <p>Favorites Doctors Card</p>
          </BaseCol>

          <BaseCol id="news" span={24}>
            <p>News Card</p>
          </BaseCol>
        </BaseRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="blood-screening">
          <p>Blood Screening Card</p>
        </div>
        <S.Space />
        <S.ScrollWrapper id="patient-timeline">
          <p>Patient Results Card</p>
        </S.ScrollWrapper>
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 20]}>
      <p>Statistics Cards</p>

      {isTablet && (
        <BaseCol id="map" md={24} order={4}>
          <p>Map Card</p>
        </BaseCol>
      )}

      <BaseCol id="latest-screenings" xs={24} md={12} order={(isTablet && 5) || 0}>
        <p>Screenings Card</p>
      </BaseCol>

      <BaseCol id="activity" xs={24} md={12} order={(isTablet && 8) || 0}>
        <p>Activity Card</p>
      </BaseCol>

      <BaseCol id="treatment-plan" xs={24} md={24} order={(isTablet && 10) || 0}>
        <p>Treatment Card</p>
      </BaseCol>

      <BaseCol id="health" xs={24} md={12} order={(isTablet && 9) || 0}>
        <p>Health Card</p>
      </BaseCol>

      <BaseCol id="patient-timeline" xs={24} md={12} order={(isTablet && 11) || 0}>
        <p>Patient Results Card</p>
      </BaseCol>

      <BaseCol id="blood-screening" xs={24} md={12} order={(isTablet && 6) || 0}>
        <p>Blood Screening Card</p>
      </BaseCol>

      <BaseCol id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>
        <p>Favorites Doctors Card</p>
      </BaseCol>

      <BaseCol id="covid" xs={24} md={12} order={(isTablet && 12) || 0}>
        <p>Covid Card</p>
      </BaseCol>

      <BaseCol id="news" xs={24} md={24} order={(isTablet && 14) || 0}>
        <p>News Card</p>
      </BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>{t('common.medical-dashboard')}</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
