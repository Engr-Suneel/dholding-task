import React, { useEffect, useMemo, useState } from 'react';
import { INews, getAppleNews, getNvidiaNews, getTeslaNews } from '../../../api';
import { NewsTypeEnum } from '../../../enums';
import { BaseSpin } from '../../common/BaseSpin/BaseSpin';
import { BaseSpace } from '../../common/BaseSpace/BaseSpace';
import NewsItem from './NewsItem';
import styled from 'styled-components';

const Heading = styled.span.attrs({ className: 'ant-card-head-title' })`
  padding: 0px;
  font-size: 18px;
  font-weight: bold;
`;

export const NewsWrapper = styled.div`
  max-height: none;
  overflow-y: scroll;
  height: calc(100% - 30px);
`;

export const Space = styled(BaseSpace)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 30px);
`;

const NewsDetails: React.FC<any> = (props: any) => {
  const { newsType, title } = props;
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setLoading] = useState(false);

  const newsItems = useMemo(
    () => news.map((item, index) => <NewsItem key={index} {...item} />),
    [news]
  );

  useEffect(() => {
    setLoading(true);
    switch (newsType) {
      case NewsTypeEnum.APPLE:
        getAppleNews().then((res) => {
          setNews(res);
          setLoading(false);
        });
        break;
      case NewsTypeEnum.TESLA:
        getTeslaNews().then((res) => {
          setNews(res);
          setLoading(false);
        });
        break;
      case NewsTypeEnum.NVIDIA:
        getNvidiaNews().then((res) => {
          setNews(res);
          setLoading(false);
        });
        break;
      default:
        break;
    }
  }, [newsType]);

  return (
    <>
      <Heading>{title}</Heading>
      {isLoading && (
        <Space align="center">
          {' '}
          <BaseSpin size="large" />{' '}
        </Space>
      )}
      {!isLoading && <NewsWrapper>{newsItems}</NewsWrapper>}
    </>
  );
};

export default NewsDetails;
