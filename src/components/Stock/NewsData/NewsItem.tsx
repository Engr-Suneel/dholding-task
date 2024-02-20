import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { INews } from '../../../api';
import { newsStatuses } from '../../../config/activityStatuses';
import { Dates } from '../../../helpers';
import * as S from './NewsItem.style';

const NewsItem: React.FC<INews> = (props: any) => {
  const { image, title, date, status, owner } = props;

  const { t } = useTranslation();

  const currentNews = useMemo(
    () => newsStatuses.find((dbStatus) => dbStatus.name === status),
    [status]
  );

  return (
    <S.ActivityCard>
      <S.Wrapper>
        <S.ImgWrapper>
          <img src={image} alt={title} width={84} height={84} />
        </S.ImgWrapper>

        <S.InfoWrapper>
          <S.InfoHeaderWrapper>
            <S.TitleWrapper>
              <S.Title level={5}>{title}</S.Title>

              <S.IconWrapper>{currentNews?.icon}</S.IconWrapper>
            </S.TitleWrapper>

            <S.Text>
              {t(currentNews?.title || '')} {t('nft.by')} {owner}
            </S.Text>
          </S.InfoHeaderWrapper>

          <S.InfoBottomWrapper>
            <S.DateText>{Dates.getDate(date).format('lll')}</S.DateText>
          </S.InfoBottomWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.ActivityCard>
  );
};

export default NewsItem;
