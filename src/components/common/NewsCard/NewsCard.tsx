import React from 'react';
import { BaseCardProps } from '../BaseCard/BaseCard';
import * as S from './NewsCard.styles';

interface NewsCardProps extends BaseCardProps {
  isSider?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  isSider = false,
  ...props
}) => {
  return (
    <S.Card
      $isSider={isSider}
      autoHeight={false}
      padding={[24, 20]}
      {...props}
    />
  );
};
