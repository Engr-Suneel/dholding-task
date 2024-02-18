import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '../../../../../../hooks';
import { BaseRadio } from '../../../../../common/BaseRadio/BaseRadio';
import { BaseSpace } from '../../../../../common/BaseSpace/BaseSpace';
import { RadioBtn } from '../SettingsOverlay/SettingsOverlay.styles';

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <BaseRadio.Group defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
      <BaseSpace direction="vertical">
        <RadioBtn value="en">
          <BaseSpace align="center">
            English
            <ReactCountryFlag svg countryCode="US" />
          </BaseSpace>
        </RadioBtn>
        <RadioBtn value="ae">
          <BaseSpace align="center">
            Arabic
            <ReactCountryFlag svg countryCode="AE" />
          </BaseSpace>
        </RadioBtn>
      </BaseSpace>
    </BaseRadio.Group>
  );
};
