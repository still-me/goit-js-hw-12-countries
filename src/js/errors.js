import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core/dist/PNotify';
import { defaults } from '@pnotify/core';
defaults.delay = 4000;
defaults.animateSpeed = 'slow';

function tooMatchesFoundError() {
    error({
        title: 'Too many matches found.Please enter a more specific query.'
          });
}

function nameError(input) {
    error({
      title: `country name: ${input} was not found`
  });
}

function fetchError() {
    error({
        title: 'Something went wrong'
    });
}

export { tooMatchesFoundError, nameError, fetchError };