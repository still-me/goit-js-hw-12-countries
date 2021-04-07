import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries.js'
import { renderCountry, pasteMarkupToCardContainer } from './js/renderCountry'
import { fetchError } from './js/errors'
import getRefs from './js/getRefs';

const refs = getRefs()

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(evt) {

    pasteMarkupToCardContainer('')
    
    const searchQuery = evt.target.value;

    if (searchQuery === '') {
        return;
    }

    fetchCountries(searchQuery)
        .then(renderCountry)
        .catch(fetchError)
        
}



