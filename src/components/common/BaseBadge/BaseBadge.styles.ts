import { defineColorBySeverity } from '../../../helpers';
import { Badge as AntBadge } from 'antd';
import { NotificationType } from '../BaseNotification/BaseNotification';
import styled from 'styled-components';

interface BadgeProps {
  severity?: NotificationType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  color: inherit;

  & .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.severity)};
  }
`;
