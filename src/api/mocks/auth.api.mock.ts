import { 
  httpApiMock 
} from './http.api.mock';
import { AuthData } from '../../interfaces';
import { defaultUser } from '../../data-providers';
import { initDefaultValues } from '../../helpers';

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (data.password === initDefaultValues.password) {
    return [
      200,
      {
        token: 'bearerToken',
        user: defaultUser,
      },
    ];
  } else return [401, { message: 'Invalid Credentials' }];
});

httpApiMock.onPost('signUp').reply(200);

httpApiMock.onPost('forgotPassword').reply(200);

httpApiMock.onPost('verifySecurityCode').reply(200);

httpApiMock.onPost('setNewPassword').reply(200);
