// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(name=>name.director);
  //console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  /*let pelicula=[];
  for(let i=0;i<array.length;i++){
    if(array[i].director===director){
      pelicula.push(array[i]);  
    }
  }
  console.log("EX2 ", pelicula);
  return pelicula;*/
  const films = array.filter(item=>item.director===director);
  //console.log("Ex2 ", films);
  return films;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  /*let contador=0;
  let sum = 0;
  let nota=0;
  for(let i=0;i<array.length;i++){
    if(array[i].director===director){
      sum=sum + array[i].score;
      contador++
    }
    nota=sum/contador;
  }
  console.log("EX3 " + nota.toFixed(2));
  return nota.toFixed(2);*/
  
  let nota = array.reduce((acc,item)=>{
    //let contador=0;
    //console.log(acc);
    let sum = [];
    if(item.director===director && item.score!=[]){
      sum.push(item.score);
      acc++;
     // console.log("EX·",acc);
    }
   console.log(acc + item.score);
    return sum/acc;
  },0);
  //console.log("EX3 " + contador);
  return nota;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(name=>name.title);
  let titlesB=[]
  for(let i=0;i<titles.length;i++){
    if(i<20){
      titlesB.push(titles[i]);
    }
  }
  titlesB.sort();
  //console.log(array);
  return titlesB;
  //console.log(titles);
  //return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
//console.log(array);
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
    bestFilmOfYear,
  };
}
