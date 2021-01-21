const BASE_URL = 'https://restcountries.eu/rest/v2';
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`).then(responce => {
    if (responce.status !== 404) {
      return responce.json();
    }
  });
}
export default { fetchCountries };
