import React from 'react';
import { useResponsive } from '../../hooks';
import { PageTitle } from '../../components/common/PageTitle/PageTitle';
import { References } from '../../components/common/References/References';
import { BaseRow } from '../../components/common/BaseRow/BaseRow';
import { BaseCol } from '../../components/common/BaseCol/BaseCol';
import * as S from './DashboardPage.styles';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <BaseRow gutter={[60, 60]}>
          <BaseCol span={24}>
            <p>Trending Creators</p>
          </BaseCol>

          <BaseCol span={24}>
            <p>Recently Added Nft</p>
          </BaseCol>

          <BaseCol span={24}>
            <p>Trending Collections</p>
          </BaseCol>

          <BaseCol span={24}>
            <p>Recent Activity</p>
          </BaseCol>
        </BaseRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="balance">
          <p>Balance</p>
        </div>
        <S.Space />
        <div id="total-earning">
          <p>Total Earning</p>
        </div>
        <S.Space />
        <S.ScrollWrapper id="activity-story">
          <p>Activity Story</p>
        </S.ScrollWrapper>
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseCol span={24}>
        <p>Trending Creators</p>
      </BaseCol>

      <BaseCol span={24}>
        <p>Recently Added Nft</p>
      </BaseCol>

      <BaseCol span={24}>
        <p>Trending Collections</p>
      </BaseCol>

      <BaseCol span={24}>
        <p>Recent Activity</p>
      </BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
