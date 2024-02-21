import { NotificationOutlined, StarFilled } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import React from 'react';

import styled from 'styled-components';

const { Text } = Typography;
const SpaceWrapper = styled(Space)`
  justify-content: end;
  width: 100%;
`;

const TextSpaceWrapper = styled(Space)`
  margin-top: 20px;
  width: 100%;

  > .ant-space-item {
    .ant-typography {
      line-height: 16px;
      text-align: justify;
      font-size: 14px;
    }
  }
`;

const CompanyWatchListDetails: React.FC<any> = (props: any) => {
  const { discription } = props;
  return (
    <>
      <SpaceWrapper>
        <Button icon={<NotificationOutlined />} />
        <Button type="primary" icon={<StarFilled />}>
          Add to Watchlist
        </Button>
      </SpaceWrapper>

      <TextSpaceWrapper>
        <Text>
          <strong>Discription: </strong> {discription}
        </Text>
      </TextSpaceWrapper>
    </>
  );
};

export default CompanyWatchListDetails;
