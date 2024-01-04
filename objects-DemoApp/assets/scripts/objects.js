const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = []; // array is an object of reference type

// To view new movie list on the page after rendering all if nothing is filtered otherwise render only the filtered one
const renderMovies = (filter = '') => {
  // creates `card` at the end of the page
  const movieList = document.getElementById('movie-list'); // not an ideal way but good for this DemoApp

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = ''; // not an ideal way but this means whenever we add a movie we clear the entire current `moveList` and re-rendered it from scratch

  const filteredMovies = !filter // falsy value (i.e no filter value)
  ? movies 
  : movies.filter(movie => movie.info.title.includes(filter)) // filter(()=>{})

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // movieEl.textContent = movie.info.title;
    // for Outputting the Dynamic Properties' `key : value` pair on the card along with Older and Current `movieEl`s
    // movieEl.textContent = movie.info.title + ' - ' + movie.info[extraName]; 
    // above code would not work as `extraName` is defined in below `addMovieHandler()` and `let` and `const` are `block-scoped` 
    // other way that can come up in our mind is to define `extraName` globally but this would also not work as `addMovieHandler()` is called multiple times
    // for different `movies` where every time, `extraName` could hold a new value. Now, if we only have one global variable where we store this value,
    // then this will always hold the latest value the user entered, not all values. So here if we can output this, we would also only output the latest value,
    // so that is certainly not a solution we can use, instead we can do something different.
    let text = movie.info.title + ' - '; // this is called `Property Chaining`
    for (const key in movie.info) {
      if (key !== 'title' ){ // as we know key is always a string so writing `title` as 'string' otherwise javascript will search for `title` variable
        text = text + `${key}: ${movie.info[key]}`; // Dynamic property accessing logic(using Property Chaining in `movie.info[key]`) to get the `key` and current key's `value`
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  // Adding some validations
  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  // After Validation constructing an object `newMovie`
  const newMovie = {
    info: {
      title, // javaScript understand this behind the scene as `title : title`(i.e if keyName = valueName in an object's property then we can omit one of them)
      [extraName]: extraValue // Dynamic PropertyName and PropertyValue
    },
    id: Math.random().toString() // here we are doing `Method Chaining`
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

// Adding the Filter Functionality(i.e Search)
const searchMovieHandler = () => {
  // reading the user input
  const filterTerm = document.getElementById('filter-title').value;
  // calling render movies and forward the `filterTerm` into it so that it will render movies that are only filtered
  renderMovies(filterTerm);
};

// Events
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);