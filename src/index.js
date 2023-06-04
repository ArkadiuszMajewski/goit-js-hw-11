// const { async } = require("@vimeo/player");

const searchForm = document.querySelector(".search-form")
const searchBox = document.querySelector("#search-box")

const API_PATH = "https://pixabay.com/api"
const API_KEY = "36819144-796cb24dbda7f1c215c0374a0"
const DEFAULT_PIXABAY_PARAMS = {
    key: API_KEY,
    per_page: '20',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  async function pingPixabay({ q = '', page = '1' }) {
    try {
      const querystring = new URLSearchParams({
        ...DEFAULT_PIXABAY_PARAMS,
        page,
        q,
      });
  
      const response = await fetch(`${API_PATH}?${querystring}`);
      if (!response.ok) {
        if (response.status === 400) {
          return [];
        }
        return { error: response.status };
      }
  
      const { hits: photos } = await response.json();
  
      return photos;
    } catch (e) {
      return { error: e.toString() };
    }
  }


searchForm.addEventListener("submit", searchForPhotos)
searchForm.dispatchEvent(new Event("submit"))

async function searchForPhotos(e) {
    e.preventDefault();
    
  e.target.page.value = '1';
  const q = e.target.q.value;

  await loadPhotos({ q, page: '1' });

  }

  async function loadPhotos({ q, page }) {
    const photos = await pingPixabay({ q, page });
    if (photos.error) {
      alert(photos.error);
      return;
    }
    drawPhotos({ photos, page });
    return;
  }
  async function scrollHandler() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      const searchForm = document.querySelector('#searchPhotosForm');
      const page = parseInt(searchForm.page.value);
      searchForm.page.value = page + 1;
      await loadPhotos({ q: searchForm.q.value, page: searchForm.page.value });
    }
  }
  async function searchForPhotos(e) {
    e.preventDefault();
  
    e.target.page.value = '1';
    const q = e.target.q.value;
  
    await loadPhotos({ q, page: '1' });
  }
  
const getPhotoElement = (photo) => {
  const img = document.createElement('img');
  img.classList.add('photo');
  img.src = photo.webformatURL;
  return img;
};

function drawPhotos({ photos, page }) {
  const photoContainer = document.querySelector('#photos');
  if (page === '1') {
    photoContainer.innerHTML = '';
  }

  const children = photos.map(getPhotoElement);
  photoContainer.append(...children);
}

export async function loadPhotos({ q, page }) {
  const photos = await pingPixabay({ q, page });
  if (photos.error) {
    alert(photos.error);
    return;
  }
  drawPhotos({ photos, page });
  return;
}