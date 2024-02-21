import React from 'react';
import { Dates } from '../helpers';

export interface IApple {
  key: React.Key;
  date: any;
  price: number;
  open: number;
  high: number;
  low: number;
  volumne: string;
  changes: string;
  isHigher: boolean;
}

export const getAppleData = (): Promise<IApple[]> => {
  return new Promise((resolve: any) => {
    let result: IApple[] = [];

    for (let i = 0; i < 1000; i++) {
      const item: IApple = {
        key: 1 + i,
        date: Dates.getDate("2024-02-20T16:00:00.000Z").subtract(1 + i, 'day'),
        price: 182.31,
        open: 183.42,
        high: 184.85,
        low: 181.66,
        volumne: "49.75M",
        changes: "-0.84%",
        isHigher: false
      };
      result.push(item);
    };

    setTimeout(() => {
      resolve(result);
    }, 2000);
  })
}