import { v4 as generateUUID } from 'uuid';

export const createUniqueId = () => {
  return generateUUID();
};
