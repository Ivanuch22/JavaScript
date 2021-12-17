'use strict'


let numberOfFilms;

let start = function(){
	while(numberOfFilms =='' || numberOfFilms === null || isNaN(numberOfFilms)|| numberOfFilms.length >= 50){
		numberOfFilms = +prompt('Скільки ви переглянули фільмів?','');
	};
};
start();

const personalMovieDB = {
	count: numberOfFilms, 
	movies:{
		1: 'Harry Poter',
		2: 'Merlin',
		3: 'Home alone'
	},
	actors:{},
	genres:{},
	privat:true 
};

let checkPrivatDB = function(){
	if(personalMovieDB.privat == false){
		console.log(personalMovieDB)
	}
};
checkPrivatDB()

let whatYourFavoriteGenres = function(){
	for(let i = 1; i<4; i++){
		let whatYourFavoriteGenres = prompt(`Ваш любимий жанр під номером ${personalMovieDB.movies[i]}`);
		personalMovieDB.genres[personalMovieDB.movies[i]] = whatYourFavoriteGenres;
	}
	console.log(personalMovieDB);
};
whatYourFavoriteGenres()