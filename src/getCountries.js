import { url_prefix } from '../src/url-config';

export async function getCountries() {
  const response = await fetch(`${url_prefix}/countries.json`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
}
