import notifications from './notification';
import country from '../templates/country.hbs';
import countries from '../templates/countries.hbs';
import getRefs from './refs';
const ref = getRefs();
function renderCountry(countriesList) {
  if (countriesList.length === 1) {
    const markup = country(countriesList);

    ref.Render.innerHTML = markup;
  } else if (countriesList.length > 1 && countriesList.length < 10) {
    const markup = countries(countriesList);

    ref.Render.innerHTML = markup;
  } else if (countriesList.length > 9) {
    notifications.onTooMuch();
  } else {
    notifications.onNull;
  }
}

export default renderCountry;
