import { searchForPhotos } from './handlers.js';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', searchForPhotos);
// window.addEventListener('scroll', scrollHandler);
