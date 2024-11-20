// var page = location;

// console.log(page)



var inputGamesSearch = document.querySelector('#findGame');

let GamePosters = document.querySelectorAll('img');

GamePosters.forEach(function(el){
	// console.log(el)
	let bg = el.parentElement.querySelector(".poster-background");
	let gamename = el.title;
	let gameheader = bg.querySelector('.game-header');
	el.onclick = function(){
		if(el.classList.value.indexOf('img-poster-big') != -1){
			el.classList.remove('img-poster-big');
			el.style.left = 0;
			bg.style.opacity = 0;
			// el.style.left = "";
			// bg.style.zIndex = "-1";
			bg.style.display = "";
			el.parentElement.style.height = '';
			
		}else{
			gameheader.innerText = gamename;
			el.classList.add('img-poster-big');
			bg.style.display = "block";
			bg.style.zIndex = 1;
			el.parentElement.style.height = '300px';
			el.style.left = "";
			bg.style.opacity = 1;
			// el.style.left = 5+'px';
			el.style.left = -el.offsetLeft + 8 + 5 + 'px';
		}
		
	}
});

inputGamesSearch.oninput = function(){
	let gamesList = document.querySelectorAll('img');
	let inputData = inputGamesSearch.value.trim().toLowerCase();
	let block = [];
	// console.clear();
	if(inputData != ''){
		document.querySelector(`[index="10"]`).style.display = "none";
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
