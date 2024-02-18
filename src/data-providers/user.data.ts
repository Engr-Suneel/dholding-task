import { GenderEnum, LangEnum } from "../enums";
import { IUser } from "../interfaces";
import avatarImg from '../assets/avaters/avatar.webp';

export const defaultUser: IUser = {
  id: 1,
  firstName: 'Chris',
  lastName: 'Johnson',
  imgUrl: avatarImg,
  userName: '@john1989',
  email: {
    name: 'chris.johnson@altence.com',
    verified: false,
  },
  phone: {
    number: '+18143519459',
    verified: true,
  },
  sex: GenderEnum.MALE,
  birthday: '01/26/2022',
  lang: LangEnum.EN,
  country: 'GB',
  city: 'London',
  address1: '14 London Road',
  zipcode: 5211,
  website: 'altence.com',
  socials: {
    twitter: '@altence_team',
    facebook: 'https://facebook.com/groups/1076577369582221',
    linkedin: 'https://linkedin.com/company/altence',
  }
}