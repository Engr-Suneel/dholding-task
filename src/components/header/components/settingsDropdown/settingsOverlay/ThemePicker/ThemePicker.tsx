import React from 'react';
import { ThemeType } from '../../../../../../interfaces';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { setTheme } from '../../../../../../stores/slices/theme.slice';
import { setNightMode } from '../../../../../../stores/slices/night-mode.slice';
import { MoonSunSwitch } from '../../../../../common/MoonSunSwitch/MoonSunSwitch';

export const ThemePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleClickButton = (theme: ThemeType) => {
    dispatch(setTheme(theme));
    dispatch(setNightMode(false));
  };

  return (
    <MoonSunSwitch
      isMoonActive={theme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
