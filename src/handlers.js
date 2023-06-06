import { loadPhotos } from './ui.js';
import { totalHits } from './pixabay.js';
import Notiflix from 'notiflix';
const serch = document.querySelector('#serch');

const buttonLoadMore = document.querySelector('.load-more');
let page = '';

export async function searchForPhotos(e) {
  e.preventDefault();
  const q = e.target.searchQuery.value;
  // console.log(e.target.searchQuery.value);
  await loadPhotos({ q, page: '1' });
  buttonLoadMore.removeAttribute('hidden');
  return (page = 1), q;
}

buttonLoadMore.addEventListener('click', buttonLoad);

async function buttonLoad(e) {
  const q = serch.value;
  let pageCount = totalHits / 40;
  if (pageCount <= page) {
    return Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
  page = page + 1;
  await loadPhotos({ q, page });
  console.log(pageCount);
}
