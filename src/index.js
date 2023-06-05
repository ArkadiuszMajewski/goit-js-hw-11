// const axios = require('axios').default;
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const API_KEY = '36819144-796cb24dbda7f1c215c0374a0';
// const API_PATH = 'https://pixabay.com/api/';

// const searchForm = document.querySelector(`#search-form`);
// const page = '';
// galleryItems = [];
// const DEFAULT_PIXABAY_PARAMS = {
//   key: API_KEY,
//   per_page: '20',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
// };

// async function pingURL(page = '1', q = '') {
//   try {
//     const querystring = new URLSearchParams({
//       ...DEFAULT_PIXABAY_PARAMS,
//       page,
//       q,
//     });

//     const response = await axios.get(
//       `${API_PATH}?${querystring}`
//       // {mode: 'cors'},
//     );
//     if (response.status > 400) {
//       return console.log('error: response.status');
//     }
//     return (
//       response, console.log(response.data.hits)
//       // galleryItems.push(...response.data.hits)
//     );
//   } catch (error) {
//     console.log('error');
//   }
// }

// searchForm.addEventListener('submit', handler);
// searchForm.dispatchEvent(new Event('submit'));

// // function handler(e) {
//   e.preventDefault();
//   q = e.target.searchQuery.value;
//   // console.log(galleryItems);
//   pingURL();
//   buttonLoadMore.classList('hidden');
// }

// fetch(
//   `https://pixabay.com/api/?key=${API_KEY}&q=travel&image_type=photo&pretty=true`
// )
//   .then(res => res.json())
//   .then(
//     result => {
//       // Just for the demo
//       const html = result.hits
//         .map(
//           hit => `<a href="${hit.pageURL}"><img src="${hit.previewURL}"></a>`
//         )
//         .join('');
//       document.body.innerHTML = html;
//     },
//     error => {
//       console.log(error);
//     }
//   );
