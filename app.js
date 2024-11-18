// var page = location;

// console.log(page)



var inputGamesSearch = document.querySelector('#findGame');

let GamePosters = document.querySelectorAll('img');

GamePosters.forEach(function(el){
	console.log(el)
	el.onclick = function(){
		if(el.classList.value.indexOf('img-poster-big') != -1){
			el.classList.remove('img-poster-big');
		}else{
			el.classList.add('img-poster-big');
		}
		
	}
});

inputGamesSearch.oninput = function(){
	let gamesList = document.querySelectorAll('img');
	let inputData = inputGamesSearch.value.trim().toLowerCase();
	let block = [];
	// console.clear();
	if(inputData != ''){
		gamesList.forEach(function(el){
			let search = el.title.toLowerCase().search(inputData);
			// console.log(el.title);
			if(search == -1){

				el.style.display = "none";
				el.innerHTML = el.innerText;
				el.parentElement.parentElement.style.display = 'none';
			}else{
				let elblock = el.parentElement.parentElement.attributes.index;
				if(elblock != undefined){
					let blockId = elblock.value;
					block.push(blockId);
					el.style.display = "";
				}
			}
			
		});
		block.forEach(function(id){
			let el = document.querySelector(`[index="${id}"]`);
			el.style.display = '';
		})
	}else{
		block = [];
		gamesList.forEach(function(el){
			el.style.display = '';
			el.innerHTML = el.innerText;
			el.parentElement.parentElement.style.display = '';
		})
	}
}

window.onscroll = function(){
	if(window.pageYOffset > 0){
		document.querySelector('header').style.boxShadow = '0px 0px 8px #00000029';
	}else{
		document.querySelector('header').style.boxShadow = '';
	}
}


function gamesListSearch(str, pos, len){
	return str.slice(0, pos) + '<b>' + str.slice(pos, pos+len) + '</b>' + str.slice(pos+len);

}