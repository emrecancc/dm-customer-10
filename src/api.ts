import { fetchData } from './data';

export const data = (async () => {
  const result = await fetchData();
  return result;
})();

export default data;