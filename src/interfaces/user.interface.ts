import { 
  GenderEnum, 
  LangEnum 
} from "../enums";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: IEmail;
  phone: IPhone;
  sex: GenderEnum;
  birthday: string;
  lang: LangEnum;
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: ISocials;
}

export interface IEmail {
  name: string;
  verified: boolean;
}

export interface IPhone {
  number: string;
  verified: boolean;
}

export interface ISocials {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
}