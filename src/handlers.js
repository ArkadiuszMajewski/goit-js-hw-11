import { loadPhotos } from './ui.js';

const buttonLoadMore = document.querySelector('.load-more');
let page = '';
export async function searchForPhotos(e) {
  e.preventDefault();
  // console.log(e);
  // e.target.page.value = '1';

  const q = e.target.searchQuery.value;
  await loadPhotos({ q, page: '1' });
  buttonLoadMore.removeAttribute('hidden');
}

// export async function scrollHandler() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight) {
//     const searchForm = document.querySelector('#search-form');
//     const page = parseInt(searchForm.page.value);
//     searchForm.page.value = page + 1;
//     await loadPhotos({ q: searchForm.q.value, page: searchForm.page.value });
//   }
// }
buttonLoadMore.addEventListener('click', buttonLoad);
async function buttonLoad(e) {
  console.log('asdsad');
}
