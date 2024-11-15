// var page = location;

// console.log(page)



var inputGamesSearch = document.querySelector('#findGame');


inputGamesSearch.oninput = function(){
	let gamesList = document.querySelectorAll('li');
	let inputData = inputGamesSearch.value.trim().toLowerCase();
	let block = [];

	if(inputData != ''){
		gamesList.forEach(function(el){
			let search = el.innerText.toLowerCase().search(inputData);

			if(search == -1){

				el.style.display = "none";
				el.innerHTML = el.innerText;
				el.parentElement.parentElement.style.display = 'none';
			}else{
				let blockId = el.parentElement.parentElement.attributes.index.value;
				block.push(blockId);
				el.style.display = "";
				el.innerHTML = gamesListSearch(el.innerText, search, inputData.length);
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




function gamesListSearch(str, pos, len){
	return str.slice(0, pos) + '<b>' + str.slice(pos, pos+len) + '</b>' + str.slice(pos+len);

}