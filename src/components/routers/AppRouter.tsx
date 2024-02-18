import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering

import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import NewPasswordPage from '../../pages/NewPasswordPage';
import SecurityCodePage from '../../pages/SecurityCodePage';
import LockPage from '../../pages/LockPage';

import MainLayout from '../../components/layouts/main/MainLayout/MainLayout';
import { withLoading } from '../../hocs/withLoading.hoc';
import NftDashboardPage from '../../pages/DashboardPages/NftDashboardPage';
import MedicalDashboardPage from '../../pages/DashboardPages/MedicalDashboardPage';
import RequireAuth from './RequireAuth';

const AuthLayout = React.lazy(() => import('../../components/layouts/AuthLayout/AuthLayout'));
const ServerErrorPage = React.lazy(() => import('../../pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('../../pages/Error404Page'));
const Logout = React.lazy(() => import('./Logout'));

export const NFT_DASHBOARD_PATH = '/';
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard';

const MedicalDashboard = withLoading(MedicalDashboardPage);
const NftDashboard = withLoading(NftDashboardPage);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

const AuthLayoutFallback = withLoading(AuthLayout);
const LogoutFallback = withLoading(Logout);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return(
    <BrowserRouter>
      <Routes>
        <Route path={NFT_DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<NftDashboard />} />
          <Route path={MEDICAL_DASHBOARD_PATH} element={<MedicalDashboard />} />
          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
        <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="security-code" element={<SecurityCodePage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  )
}