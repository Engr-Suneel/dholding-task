import React, { useEffect, useMemo, useState } from 'react';
import { INews, getAppleNews, getNvidiaNews, getTeslaNews } from '../../../api';
import { NewsTypeEnum } from '../../../enums';
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

const NewsDetails: React.FC<any> = (props: any) => {
  const { newsType, title } = props;
  const [news, setNews] = useState<INews[]>([]);

  const newsItems = useMemo(
    () => news.map((item, index) => <NewsItem key={index} {...item} />),
    [news]
  );

  useEffect(() => {
    switch (newsType) {
      case NewsTypeEnum.APPLE:
        getAppleNews().then((res) => setNews(res));
        break;
      case NewsTypeEnum.TESLA:
        getTeslaNews().then((res) => setNews(res));
        break;
      case NewsTypeEnum.NVIDIA:
        getNvidiaNews().then((res) => setNews(res));
        break;
      default:
        break;
    }
  }, [newsType]);

  return (
    <>
      <Heading>{title}</Heading>
      <NewsWrapper>{newsItems}</NewsWrapper>
    </>
  );
};

export default NewsDetails;
