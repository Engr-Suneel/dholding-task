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
import NftDashboardPage from '../../pages/DashboardPages/DashboardPage';
import RequireAuth from './RequireAuth';

const AuthLayout = React.lazy(() => import('../../components/layouts/AuthLayout/AuthLayout'));
const ServerErrorPage = React.lazy(() => import('../../pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('../../pages/Error404Page'));
const Logout = React.lazy(() => import('./Logout'));
const ApplePage = React.lazy(() => import('../../pages/Stock/Apple/ApplePage'));
const TeslaPage = React.lazy(() => import('../../pages/Stock/Tesla/TeslaPage'));
const NvidiaPage = React.lazy(() => import('../../pages/Stock/Nvidia/NvidiaPage'));

export const DASHBOARD_PATH = '/';

const NftDashboard = withLoading(NftDashboardPage);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

const Apple = withLoading(ApplePage);
const Tesla = withLoading(TeslaPage);
const Nvidia = withLoading(NvidiaPage);

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
        <Route path={DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<NftDashboard />} />
          <Route path="stock">
            <Route path="apple" element={<Apple />} />
            <Route path="tesla" element={<Tesla />} />
            <Route path="nvidia" element={<Nvidia />} />
          </Route>
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