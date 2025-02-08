
export function createMarkup(dataArr) {
  return dataArr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery--list">
  <a class="gallery--link" href="${largeImageURL}">
  <img
  class="gallery--image"
                src="${webformatURL}"
                alt="${tags}"
                width="360"
                height="200"
              />
            </a>
            <div class="thumb--box">
              <div class="thumb--item">
                <h2 class="thumb--tittle">Likes</h2>
                <p class="thumb--amount">${likes}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Views</h2>
                <p class="thumb--amount">${views}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Comments</h2>
                <p class="thumb--amount">${comments}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${downloads}</p>
              </div>
            </div>
          </li>`)
      .join('');
  }


export function scrollByElemHeight()  {

    const getHeightImgCard = () => document.querySelector('.gallery--list').getBoundingClientRect();
    
    window.scrollBy({
      top: getHeightImgCard().height * 2,
      left: 0,
      behavior: "smooth",
  });
  }