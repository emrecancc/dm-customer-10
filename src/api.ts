import fetchData from './fetch';

async function getData() {
  const data = await fetchData();
  return data;
}
