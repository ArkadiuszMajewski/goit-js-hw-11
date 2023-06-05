import { loadPhotos } from './ui.js';

const serch = document.querySelector('#serch');

const buttonLoadMore = document.querySelector('.load-more');
let page = '';

export async function searchForPhotos(e) {
  e.preventDefault();

  const q = e.target.searchQuery.value;
  await loadPhotos({ q, page: '1' });
  buttonLoadMore.removeAttribute('hidden');
  return (page = 1), q;
}

buttonLoadMore.addEventListener('click', buttonLoad);

async function buttonLoad(e) {
  const q = serch.value;
  // console.log(q);
  page = page + 1;
  await loadPhotos({ q, page });
}
