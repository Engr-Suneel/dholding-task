import { FieldTimeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import styled from 'styled-components';

const Heading = styled.span.attrs({ className: 'ant-card-head-title' })`
  display: block;
  padding: 0px;
  font-size: 24px;
  font-weight: bold;
`;

const SpaceWrapper = styled(Space)`
  width: 100%;
  > .ant-space-item .name {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  > .ant-space-item .currency-text {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  > .ant-space-item .currency {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  > .ant-space-item .disclaimer {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`;

const PriceSpaceWrapper = styled(Space)`
  width: 100%;
  margin-top: 10px;
  > .ant-space-item {
    .price {
      line-height: 60px;
      font-size: 42px;
      font-size: 42px;
      color: rgb(35 37 38/1);
      font-weight: 700;
    }

    .charges {
      font-size: 1.25rem;
      font-weight: 700;
      color: red;
      margin-left: 20px;
    }
  }
`;

const TimeSpaceWrapper = styled(Space)`
  width: 100%;
  > .ant-space-item {
    .anticon-field-time {
      svg {
        color: lightgreen;
      }
    }

    .timeData {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.25rem;
    }

    .realTime {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
  }
`;

const CompanyDetails: React.FC<any> = (props: any) => {
  const { title, flag, name, currency, price, charges, realTime } = props;

  return (
    <>
      <Heading>{title}</Heading>
      <SpaceWrapper>
        <ReactCountryFlag svg countryCode={flag} />
        <span className="name">{name}</span>
        <span className="currency-text">Currency in</span>
        <span className="currency">{currency}</span>
        <span className="disclaimer">. Disclaimer</span>
      </SpaceWrapper>
      <PriceSpaceWrapper>
        <span className="price">{price}</span>
        <span className="charges">{charges}</span>
      </PriceSpaceWrapper>
      <TimeSpaceWrapper>
        <FieldTimeOutlined />
        <span className="timeData">Real-time Data .</span>
        <span className="realTime">{realTime}</span>
      </TimeSpaceWrapper>
    </>
  );
};

export default CompanyDetails;
