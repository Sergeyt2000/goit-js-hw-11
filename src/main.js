// import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkUp } from './js/render-functions';
import { galleryModal } from './js/render-functions';
// import { removeEl } from './js/render-functions';
import { searchData } from './js/pixabay-api'

const formEl = document.querySelector('.form');
export const searchInput = document.querySelector('.form-input');
const resp = {
  galleryEl: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
};

formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  
  if (searchInput.value.trim() === '') {
    return iziToast.warning({
      position: 'topRight',
      message: 'Please enter something',
    }); 
  }
  resp.loaderEl.classList.remove('visually-hidden');
  resp.galleryEl.innerHTML = '';
  searchData()
    .then(response => {
      if (response.data.hits.length === 0) {
        formEl.reset();
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }            
      resp.galleryEl.insertAdjacentHTML(
        'beforeend',
        createMarkUp(response.data.hits)
      );
      galleryModal();
      formEl.reset();
    })
    .catch(error => console.log(error))
    .finally(() => resp.loaderEl.classList.add('visually-hidden'));
}
  
 
