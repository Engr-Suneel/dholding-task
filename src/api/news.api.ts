import { NewsStatusType } from '../interfaces';

export interface INews {
  image: string;
  title: string;
  status: NewsStatusType;
  date: number;
  owner: string;
}

export interface IUserNews extends Omit<INews, 'owner'> {
  usd_value: number;
}

export interface ITrendingNews {
  title: string;
  owner: string;
  image: string;
  avatar: string;
  usd_value: number;
}

export const getAppleNews = (): Promise<INews[]> => {
  return new Promise((res: any) => {
    setTimeout(() => {
      res([
        {
          image:  '../assets/images/news/1.webp',
          title: 'Yellow Light',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 24,
          owner: '@chingu98',
        },
        {
          image: '../assets/images/news/2.webp',
          title: 'Cult of Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: '@azukaru1X',
        },
        {
          image: '../assets/images/news/3.webp',
          title: 'Match the Eyes',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: '@samsam',
        },
        {
          image: '../assets/images/news/4.webp',
          title: 'Plan A & CUSTOM X3',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 8,
          owner: '@mikke_swar',
        },
      ]);
    }, 1000);
  });
};

export const getNvidiaNews = (): Promise<INews[]> => {
  return new Promise((res: any) => {
    setTimeout(() => {
      res([
        {
          image:  '../assets/images/news/3.webp',
          title: 'Yellow Light',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 24,
          owner: '@chingu98',
        },
        {
          image: '../assets/images/news/4.webp',
          title: 'Cult of Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: '@azukaru1X',
        },
        {
          image: '../assets/images/news/5.webp',
          title: 'Match the Eyes',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: '@samsam',
        },
        {
          image: '../assets/images/news/6.webp',
          title: 'Plan A & CUSTOM X3',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 8,
          owner: '@mikke_swar',
        },
      ]);
    }, 1000);
  });
};

export const getTeslaNews = (): Promise<INews[]> => {
  return new Promise((res: any) => {
    setTimeout(() => {
      res([
        {
          image:  '../assets/images/news/5.webp',
          title: 'Yellow Light',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 24,
          owner: '@chingu98',
        },
        {
          image: '../assets/images/news/6.webp',
          title: 'Cult of Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: '@azukaru1X',
        },
        {
          image: '../assets/images/news/7.webp',
          title: 'Match the Eyes',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: '@samsam',
        },
        {
          image: '../assets/images/news/8.webp',
          title: 'Plan A & CUSTOM X3',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 8,
          owner: '@mikke_swar',
        },
      ]);
    }, 1000);
  });
};
