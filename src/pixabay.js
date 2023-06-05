import { API_PATH, DEFAULT_PIXABAY_PARAMS } from './config.js';
import Notiflix from 'notiflix';
const axios = require('axios');

export default async function pingPixabay({ q = '', page = '1' }) {
  try {
    const querystring = new URLSearchParams({
      ...DEFAULT_PIXABAY_PARAMS,
      page,
      q,
    });

    const response = await fetch(`${API_PATH}?${querystring}`, {
      mode: 'cors',
    });

    if (!response.ok) {
      return { error: response.status };
    }
    console.log(response);
    const { hits: photos } = await response.json();
    console.log(photos);
    if (photos.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    return photos;
  } catch (e) {
    return { error: e.toString() };
  }
}

const buttonLoadMore = document.querySelector('.load-more');
buttonLoadMore.addEventListener('click', buttonLoad);
async function buttonLoad(e, page) {
  // console.log('asdsad');
  return;
}
