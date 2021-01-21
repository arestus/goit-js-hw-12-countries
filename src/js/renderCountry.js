import notifications from './notification';
import country from '../templates/country.hbs';
import countries from '../templates/countries.hbs';
import getRefs from './refs';
const ref = getRefs();
function renderCountry(arrCountry) {
  if (arrCountry.length === 1) {
    const markup = country(arrCountry);

    ref.Render.innerHTML = markup;
  } else if (arrCountry.length > 1 && arrCountry.length < 10) {
    const markup = countries(arrCountry);

    ref.Render.innerHTML = markup;
  } else if (arrCountry.length > 9) {
    notifications.onTooMuch();
  } else {
    notifications.onNull;
  }
}

export default renderCountry;
