import './styles.css';
import debounce from 'lodash.debounce';
import renderCountry from './js/renderCountry';
import notifications from './js/notification';
import getRefs from './js/refs';
import API from './js/fetchCountries';

const ref = getRefs();

ref.inputRef.addEventListener(
  'input',
  debounce(event => {
    ref.Render.innerHTML = '';
    const searchString = event.target.value;
    if (searchString === '') {
      return;
    }

    API.fetchCountries(searchString)
      .then(renderCountry)
      .catch(error => {
        notifications.onError();
      });
  }, 500),
);
