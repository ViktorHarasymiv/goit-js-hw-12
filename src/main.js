/* Import */

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";
import { scrollByElemHeight } from "./js/render-functions";

/*   Variables   */ 

const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const nextLoading = document.querySelector('.more');

const form = document.querySelector(".form");

// Controls the group number
let page = 1;

// Controls the number of items in the group
import { perPage } from "./js/pixabay-api";

let inputValue = '';

/*  Setup for gallery render */

const refreshPage = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

/*   A P I  S E R V I E S   */ 


/*  Event Listener  */

form.addEventListener("submit" , async (event) => {
    event.preventDefault();

    inputValue = form.search.value.trim();

    page = 1;

    nextLoading.classList.add('hidden');
    loader.classList.remove('hidden');

    listImages.innerHTML = "";

    if(inputValue.length === 0 || inputValue === "") {

         iziToast.warning({
             title: 'Warning',
             message: 'Please, enter a value!',

             titleColor: 'white',
            messageColor: 'white',
             titleSize: '12px',
             backgroundColor: '#ef4040',

             iconColor: 'white',
             position: 'topRight'
         });

         loader.classList.add('hidden');

         return;
    }

     await getImages(inputValue, page)
    .then(data => {
            if (!data.hits.length) {
                iziToast.warning({
                       title: 'Warning',
                       message: 'Sorry, there are no images matching your search query. Please try again!',
        
                       titleColor: 'white',
                       messageColor: 'white',
                       titleSize: '12px',
                       backgroundColor: '#ef4040',
        
                       iconColor: 'white',
                       position: 'topRight'
                });

                
                loader.classList.add('hidden');
                nextLoading.classList.add('hidden');

                form.reset();

            } else {
        
            listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));
    
            loader.classList.add('hidden');
            nextLoading.classList.remove('hidden');
        
            refreshPage.refresh();
            form.reset();

            }
        })

    .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
    
                titleColor: 'white',
                messageColor: 'white',
                titleSize: '12px',
                backgroundColor: '#ef4040',
    
                iconColor: 'white',
                position: 'topRight'
            })

            form.reset()
        });
});

nextLoading.addEventListener("click", async () => {

    // Increase page number
    page += 1;

   await getImages(inputValue, page)
    
    .then(data => {
    
      const totalPages = Math.ceil(data.totalHits / perPage);

      listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));

      scrollByElemHeight();

      refreshPage.refresh();

      if (page === totalPages) {

        nextLoading.style.display = "none";
      }
})

    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',

            titleColor: 'white',
            messageColor: 'white',
            titleSize: '12px',
            backgroundColor: '#ef4040',

            iconColor: 'white',
            position: 'topRight'
        })

        form.reset()
    });
  })