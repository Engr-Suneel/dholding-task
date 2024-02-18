import React from 'react';
import { 
  FacebookOutlined, 
  GithubOutlined, 
  LinkedinOutlined, 
  TwitterOutlined 
} from '@ant-design/icons';
import * as S from './References.styles';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="#" rel="noreferrer">
          Suneel{' '}
        </a>
        in 2024 &copy;. Based on{' '}
        <a href="#" rel="noreferrer">
          Ant-design.
        </a>
      </S.Text>
      <S.Icons>
        <a href="#" rel="noreferrer">
          <GithubOutlined />
        </a>
        <a href="#" rel="noreferrer">
          <TwitterOutlined />
        </a>
        <a href="#" rel="noreferrer">
          <FacebookOutlined />
        </a>
        <a href="#" rel="noreferrer">
          <LinkedinOutlined />
        </a>
      </S.Icons>
    </S.ReferencesWrapper>
  );
};
