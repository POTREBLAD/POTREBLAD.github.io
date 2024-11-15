// var page = location;

// console.log(page)



var inputGamesSearch = document.querySelector('#findGame');


inputGamesSearch.oninput = function(){
	let gamesList = document.querySelectorAll('li');
	let inputData = inputGamesSearch.value.trim().toLowerCase();
	let block = [];
	console.clear();
	if(inputData != ''){
		gamesList.forEach(function(el){
			let search = el.innerText.toLowerCase().search(inputData);
			
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
					el.innerHTML = gamesListSearch(el.innerText, search, inputData.length);
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