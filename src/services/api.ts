import axios from 'axios';
import type { Business } from '../types/business';

export const fetchBusinesses = async (query: string = ''): Promise<Business[]> => {
  const res = await axios.get('/data/sample-abn.json'); // local JSON
  const all: Business[] = res.data;

  if (!query) return all;

  const lower = query.toLowerCase();
  return all.filter(b =>
    b.entityName.toLowerCase().includes(lower) ||
    b.abn.includes(lower) ||
    b.state.toLowerCase().includes(lower)
  );
};
