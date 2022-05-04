export async function getCountries() {
  const response = await fetch('./countries.json');

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
}
