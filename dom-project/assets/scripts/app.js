const addMovieModalEl = document.getElementById('add-modal'); // faster in execution
// const addMovieModalEl = document.querySelector('#add-modal'); // works same
// const addMovieModalEl = document.body.children[1]; // works same

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild('button'); // works same
// but can cause issue when we change the lastElement in the `<header></header>`

const backdropEl = document.getElementById('backdrop'); // faster in execution
// const backdropEl = document.body.firstElementChild('backdrop'); // works same

const cancelAddMovieButton = addMovieModalEl.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputEls = addMovieModalEl.querySelectorAll('input');
// const userInputEls = addMovieModalEl.getElementsByTagName('input'); // works same

const entryTextSectionEl = document.getElementById('entry-text');
const listRootEl = document.getElementById('movie-list');
const deleteMovieModalEl = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSectionEl.style.display = 'block'; // old inline style
  } else {
    entryTextSectionEl.style.display = 'none'; // old inline style
  }
};

const closeMovieDeletionModalElHandler = () => {
  toggleBackdropElHandler();
  deleteMovieModalEl.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1); // this just remove the item from the selected index and 
  // move the other coming items in the array one step ahead.
  listRootEl.children[movieIndex].remove();
  // listRootEl.removeChild(listRootEl.children[movieIndex]); // works same and almost on all older browsers, as above line
  closeMovieDeletionModalElHandler();
  updateUI();
};

const startDeleteMovieModalElHandler = (movieId) => {
  deleteMovieModalEl.classList.add('visible');
  toggleBackdropElHandler();
  const cancelDeletionButton = deleteMovieModalEl.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModalEl.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true)); // swapping buttons

  confirmDeletionButton = deleteMovieModalEl.querySelector('.btn--danger');

  // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // will not work
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModalElHandler);
  
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModalElHandler);
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId)); 
  // here we used `.bind` to forward `movieID` at the end of deletion 
}

const renderNewMovieEl = (id, title, imageUrl, rating) => {
  const newMovieEl = document.createElement('li');
  newMovieEl.className = 'movie-element';
  newMovieEl.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl} alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieEl.addEventListener('click', startDeleteMovieModalElHandler.bind(null, id));
  // here we used `.bind` to forward `movieID` at the end of deletion 
  listRootEl.append(newMovieEl);
};

const toggleBackdropElHandler = () => {
  backdropEl.classList.toggle('visible');
};

const closeMovieModalElHandler = () => {
  addMovieModalEl.classList.remove('visible');
}


const showMovieModalElHandler = () => {
  // alternatively can use `function name(){}`
  addMovieModalEl.classList.add('visible');
  toggleBackdropElHandler();
};

const clearMovieInput = () => {
  // 1st way of doing
  // userInputEls[0].value = '';
  // userInputEls[1].value = '';
  // userInputEls[2].value = '';

  // Other way of doing the same
  for (const userInputEl of userInputEls) {
    userInputEl.value = '';
  }
};

const cancelAddMovieModalElHandler = () => {
  closeMovieModalElHandler();
  toggleBackdropElHandler();
  clearMovieInput();
};

const addMovieModalElHandler = () => {
  const titleValue = userInputEls[0].value;
  const imageUrlValue = userInputEls[1].value;
  const ratingValue = userInputEls[2].value;

  // below `.trim()` is used to remove the extra `white space` from before and after of the `value`
  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 || // works same as `parseInt(ratingValue)`
    +ratingValue > 5
  ) {
    alert('Please enter valid values( also keep rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModalElHandler();
  toggleBackdropElHandler();
  clearMovieInput();
  renderNewMovieEl(
    newMovie.id, 
    newMovie.title, 
    newMovie.image, 
    newMovie.rating
  );
  updateUI();
};

const backdropElClickHandler = () => {
  closeMovieModalElHandler();
  closeMovieDeletionModalElHandler();
  clearMovieInput();
};

startAddMovieButton.addEventListener('click', showMovieModalElHandler);
backdropEl.addEventListener('click', backdropElClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieModalElHandler);
confirmAddMovieButton.addEventListener('click', addMovieModalElHandler);
