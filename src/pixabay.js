import { API_PATH, DEFAULT_PIXABAY_PARAMS } from './config.js';
import Notiflix from 'notiflix';

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
      if (response.status === 400) {
        return [];
      }
      return { error: response.status };
    }
    const { hits: photos } = await response.json();
    if (photos.length === 0) {
      return;
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return photos;
  } catch (e) {
    return { error: e.toString() };
  }
}

const buttonLoadMore = document.querySelector('.load-more');
buttonLoadMore.addEventListener('click', buttonLoad);
async function buttonLoad(e, page) {
  console.log('asdsad');
  return (page = '22');
}
