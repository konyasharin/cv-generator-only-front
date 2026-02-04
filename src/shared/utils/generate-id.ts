import { IdObject } from '../types';

export const generateId = <T extends IdObject>(arr: T[]) => {
  if (arr.length === 0) return 0;

  let id: number = arr.length;
  for (const obj of arr) {
    if (id <= obj.id) id = obj.id + 1;
  }
  return id;
};
