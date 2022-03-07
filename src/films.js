// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((name) => name.director);
  //console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const films = array.filter((item) => item.director === director);
  return films;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = getMoviesFromDirector(array, director);
  const result = moviesAverage(movies);
  
  return result;
}

function moviesAverage(array) {
  const result = array.reduce((acc, item)=>{
    return acc + item.score;
  },0);

  return result/array.length;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const copy = array.map((name) => name.title);
  copy.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    return -1;
  });
  const result = copy.filter((item, i) => i < 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
 const order = [...array];
  order.sort((a,b)=>{
    if(a.year<b.year){
      return -1;
    }
    if(a.year>b.year){
      return 1;
    }
    else{
      if(a.title>b.title){
        return 1;
      }
      if(a.title<b.title){
        return -1;
      }
      return 0;
    }
  });
  return order;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const result = findByCategory(array, category);
  return result;
}

function findByCategory(array, category) {
  let encontrados = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const genre = item.genre.find((x) => x === category);
    if (genre !== undefined && item.score !== '') encontrados.push(item);
  }
  return moviesAverage(encontrados);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const change = array.map((item) => {
    return { ...item, duration: getDuration(item) };
  });
  return change;
}

function getDuration(item) {
  let hourIndex = item.duration.indexOf('h');
  let hour = parseInt(item.duration.substring(0, hourIndex)) * 60;
  let minutesIndex = item.duration.indexOf('min');
  let minutes = 0;
  if (minutesIndex > -1) {
    minutes = parseInt(item.duration.substring(hourIndex + 1, minutesIndex));
  }
  let result = hour + minutes;
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const bestFilm = array.filter(item=>item.year===year);
  let item;
  let punctuation=0;
  let result =[];

 for(let i=0; i<bestFilm.length; i++){
    if(bestFilm[i].score>punctuation){
      punctuation = bestFilm[i].score;
      item=bestFilm[i];
    }
 }
  result.push(item);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
