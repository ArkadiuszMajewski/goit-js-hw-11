const API_PATH = 'https://pixabay.com/api';
const API_KEY = '36819144-796cb24dbda7f1c215c0374a0';
const searchForm = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');
let q = searchBox.textContent;
export const DEFAULT_PIXABAY_PARAMS = {
  key: API_KEY,
  per_page: '20',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

async function pingPixabay({ q = '' }) {
  try {
    const querystring = new URLSearchParams({
      ...DEFAULT_PIXABAY_PARAMS,
      q,
    });

    const response = await fetch(`${API_PATH}?${querystring}`);
    if (!response.ok) {
      return { error: response.status };
    }

    const { hits: photos } = await response.json();
    return photos;
  } catch (e) {
    return { error: e.toString() };
  }
}
// console.log(pingPixabay());
searchForm.addEventListener('submit', searchForPhotos);
searchForm.dispatchEvent(new Event('submit'));

async function searchForPhotos(e) {
  e.preventDefault();
  const photos = await pingPixabay({ q });
  // e.target.page.value = '1';
  // const q = e.target.q.value;

  // await loadPhotos({ q, page: '1' });
}
