import countryCardTpl from '../templates/country-card.hbs';
import countriesListTpl from '../templates/countries-list.hbs';
import { tooMatchesFoundError, nameError } from './errors';
import getRefs from './getRefs';

const refs = getRefs()

function renderCountry(data) {
    const countiesQuantity = data.length;
    console.log(countiesQuantity);

    if (countiesQuantity > 10) {

        tooMatchesFoundError()
        return;

    } if (countiesQuantity > 1 && countiesQuantity <= 10) {

        const listMarkup = countriesListTpl(data)
        pasteMarkupToCardContainer(listMarkup);
        return;

    } if (countiesQuantity === 1) {

        const countyMarkup = countryCardTpl(data);
        pasteMarkupToCardContainer(countyMarkup);
        
    } if (countiesQuantity === undefined) {

        nameError(refs.input.value)

    }
}

function pasteMarkupToCardContainer (markup) {
    refs.cardContainer.innerHTML = markup;
}

export {renderCountry, pasteMarkupToCardContainer}