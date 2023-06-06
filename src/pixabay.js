import { API_PATH, DEFAULT_PIXABAY_PARAMS } from './config.js';
import Notiflix from 'notiflix';
const axios = require('axios').default;

// export default async function pingPixabay({ q = '', page = '1' }) {
//   try {
//     const querystring = new URLSearchParams({
//       ...DEFAULT_PIXABAY_PARAMS,
//       page,
//       q,
//     });

//     const response = await fetch(`${API_PATH}?${querystring}`, {
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       return { error: response.status };
//     }
//     console.log(response);
//     const { hits: photos } = await response.json();
//     console.log(photos);
//     if (photos.length === 0) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       return;
//     }
//     return photos;
//   } catch (e) {
//     return { error: e.toString() };
//   }
// }
export let totalHits = 0;
export default async function pingPixabay({ page = '1', q = '' }) {
  try {
    const querystring = new URLSearchParams({
      ...DEFAULT_PIXABAY_PARAMS,
      page,
      q,
    });

    const response = await axios.get(
      `${API_PATH}?${querystring}`
      // {mode: 'cors'},
    );
    // console.log(response);
    if (response.status > 400) {
      return console.log('error: response.status');
    }
    if (response.data.totalHits === 0) {
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    const photos = await response.data.hits;
    totalHits = response.data.totalHits;
    // console.log(totalHits);
    return totalHits, photos;
  } catch (error) {
    console.log('error');
  }
}

// const buttonLoadMore = document.querySelector('.load-more');
// buttonLoadMore.addEventListener('click', buttonLoad);
// async function buttonLoad(e, page) {
//   // console.log('asdsad');
//   return;
// }

// export default async function pingPixabay({ q = '', page = '1' }) {
//   try {
//     const querystring = new URLSearchParams({
//       ...DEFAULT_PIXABAY_PARAMS,
//       page,
//       q,
//     });

//     const response = await fetch(`${API_PATH}?${querystring}`, {
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       return { error: response.status };
//     }
//     console.log(response);
//     const { hits: photos } = await response.json();
//     console.log(photos);
//     if (photos.length === 0) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       return;
//     }
//     return photos;
//   } catch (e) {
//     return { error: e.toString() };
//   }
// }

// const buttonLoadMore = document.querySelector('.load-more');
// buttonLoadMore.addEventListener('click', buttonLoad);
// async function buttonLoad(e, page) {
//   // console.log('asdsad');
//   return;
// }
