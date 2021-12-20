'use strict'


const personalMovieDB = {
	count: 0, 
	movies:{
		1: 'Harry Poter',
		2: 'Merlin',
		3: 'Home alone'
	},
	actors:{},
	genres:[],
	privat:true,
	start : ()=>{
		while(personalMovieDB.count =='' || personalMovieDB.count === null || isNaN(personalMovieDB.count)|| personalMovieDB.count.length >= 50){
			personalMovieDB.count = +prompt('Скільки ви переглянули фільмів?','');
	  	}; 
	},
	detectPersonalLevel: ()=>{
		if(personalMovieDB.count < 10){
			console.log('Ви новачок')
		}else if(personalMovieDB.count >= 10 && personalMovieDB.count<30){
			console.log('Ви класичний наглядач')

		}else if(personalMovieDB.count >= 30 ){
			console.log('Ви Про')
		}
	},
	checkPrivatDB : ()=>{
		if(personalMovieDB.privat == false){
			console.log(personalMovieDB)
		}
	},
	whatYourFavoriteGenres : ()=>{
		for(let i = 1; i<4;i++){
			let ganre= prompt(`Ваш олюблений жанр під номером один ${i}`);
			while(ganre == '' || ganre == null){
				ganre= prompt(`Ваш олюблений жанр під номером один ${i}`);
			};
			personalMovieDB.genres[i-1] = ganre;
		}
		personalMovieDB.genres.forEach((e, b,c )=>{
			console.log(`Любимий жанр ${b+1}: ${e}`)
		})
	},
	changePrivatDB: ()=>{
		if(personalMovieDB.privat === true){
			personalMovieDB.privat = false;
			console.log(personalMovieDB.privat);
		}else {
			personalMovieDB.privat = true;
			console.log(personalMovieDB.privat);

		};

	},

};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.checkPrivatDB();
personalMovieDB.whatYourFavoriteGenres();
personalMovieDB.changePrivatDB();


