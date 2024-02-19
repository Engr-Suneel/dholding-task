import React from 'react';
import { useResponsive } from '../../hooks';
import { PageTitle } from '../../components/common/PageTitle/PageTitle';
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

          </BaseCol>

          <BaseCol span={24}>
            
          </BaseCol>

          <BaseCol span={24}>
            
          </BaseCol>

          <BaseCol span={24}>
            
          </BaseCol>
        </BaseRow>
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="balance">
          
        </div>
        <S.Space />
        <div id="total-earning">
          
        </div>
        <S.Space />
        <S.ScrollWrapper id="activity-story">
          
        </S.ScrollWrapper>
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseCol span={24}>
        
      </BaseCol>

      <BaseCol span={24}>
        
      </BaseCol>

      <BaseCol span={24}>
        
      </BaseCol>

      <BaseCol span={24}>
        
      </BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
