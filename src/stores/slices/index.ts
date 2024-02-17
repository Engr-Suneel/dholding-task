import userReducer from './user.slice';
import authReducer from './auth.slice';
import nightModeReducer from './night-mode.slice';
import themeReducer from './theme.slice';
import pwaReducer from './pwa.slice';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  pwa: pwaReducer,
};
