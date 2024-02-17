import { IUser } from '../interfaces';
import { defaultUser } from '../data-providers'


export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: IUser): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): IUser | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : defaultUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
