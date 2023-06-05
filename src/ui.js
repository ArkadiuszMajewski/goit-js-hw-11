import pingPixabay from './pixabay.js';

const gallery = document.querySelector('.gallery');
// console.log(gallery);

function drawPhotos({ photos, page }) {
  // console.log(photos);
  const photoContainer = document.querySelector('.gallery');
  if (page === '1') {
    photoContainer.innerHTML = '';
  }
  photos.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('photo-card');
    gallery.append(div);
    const img = document.createElement('img');
    img.src = element.webformatURL;
    img.alt = element.tags;
    img.loading = 'lazy';
    div.append(img);
    const div2 = document.createElement('div');
    div2.classList.add('info');
    div.append(div2);
    const p = document.createElement('p');
    p.classList.add('info-item');
    div2.append(p);
    p.innerHTML = `<b>  Likes<br>${element.likes}</b>`;
    const q = document.createElement('p');
    div2.append(q);
    q.innerHTML = `<b>Views<br>${element.views}</b>`;
    q.classList.add('info-item');
    const w = document.createElement('p');
    div2.append(w);
    w.innerHTML = `<b>Comments<br>${element.comments}</b>`;
    w.classList.add('info-item');
    const r = document.createElement('p');
    div2.append(r);
    r.innerHTML = `<b>Downloads  <br>${element.downloads}</b>`;
    r.classList.add('info-item');
  });
}

export async function loadPhotos({ q, page }) {
  const photos = await pingPixabay({ q, page });
  if (photos.length === 0) {
    return;
  }
  drawPhotos({ photos, page });
  return;
}
