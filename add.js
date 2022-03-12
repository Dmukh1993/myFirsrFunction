"use strict";
let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("какой последнгий фильм ты смотрел?", ""),
      b = prompt("на сколько ты оценешь?", "");
    if (a != null && b != null && a != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();
function detectPersonaLevel() {
  if (personalMovieDB.count < 10) {
    console.log("просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы класический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("ошибка");
  }
}
detectPersonaLevel();
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYouGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYouGenres();

// const ageWork = +prompt("сколько лет вы работаете в ЭкицентреК?", "");

// let survey = {
//   count: ageWork,
//   haveFreand: {},
//   bigBoss: {},
//   feel: [],
// };
// for (let i = 0; i < 2; i++) {
//   let a = prompt("что вам не нравиться в работе?", ""),
//     b = prompt("на сколько вы оцениваете работу?", "");
//   if (a != null && b != null && a != "" && a.length < 50) {
//     survey.bigBoss[a] = b;
//     console.log("верно");
//   } else {
//     console.log("ошибка");
//     i--;
//   }
// }
// if (survey.count < 3) {
//   alert("нужно валить");
// } else if (survey.count >= 3 && survey.count <= 5) {
//   alert("что то ты засиделся");
// } else if (survey.count >= 6) {
//   alert("Ебать ты терпила");
// } else {
//   alert("что?");
// }
// console.log(survey);

// for (let i = 0; i < 2; i++) {
//   let a = +prompt("Введите число больше 100", "");
//   if (a > 100 || a == null) {
//     alert("хорошо");
//     break;
//   } else {
//     alert("введите ещё раз", "");
//     i--;
//   }
// }
// let n = 10;
// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert(i);
// }
// const mySituation = +prompt(
//   "На сколько вы расцениваете ситуацию в стране?",
//   ""
// );
// let myAnswer = {
//   grade: mySituation,
//   action: {},
//   life: {},
// };
// for (let i = 0; i < 1; i++) {
//   let a = prompt("Что бы вы сделали?", "");

//   if (a.length > 5 && a != "" && a != null) {
//     console.log("Верно 1 значение");
//   } else {
//     alert("краткое 1е значение");
//     i--;
//   }
//   myAnswer.action = a;
// }

// for (let j = 0; j < 1; j++) {
//   let b = prompt("куда бы переехали?", "");
//   if (b.length > 5 && b != "" && b != null) {
//     console.log("Венро 2е значение");
//   } else {
//     alert("Краткое 2е значение");
//     j--;
//   }
//   myAnswer.life = b;
// }
// console.log(myAnswer);
