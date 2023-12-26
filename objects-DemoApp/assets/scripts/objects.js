const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// To view new movie list on the page after rendering
const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  // below way is not an ideal way
  movieList.innerHTML = ''; // for clearing the current `moveList` on the rendered page

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // javaScript understand this as `title : title`(i.e if keyName = valueName in an object's property then we can omit one of them)
      [extraName]: extraValue // Dynamic Property name and value
    },
    id: Math.random()
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
