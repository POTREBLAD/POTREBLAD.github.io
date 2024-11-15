// var page = location;

// console.log(page)



var inputGamesSearch = document.querySelector('#findGame');


inputGamesSearch.oninput = function(){
	let gamesList = document.querySelectorAll('li');
	let inputData = inputGamesSearch.value.trim().toLowerCase();
	if(inputData != ''){
		gamesList.forEach(function(el){
			let search = el.innerText.toLowerCase().search(inputData);

			if(search == -1){
				el.style.display = "none";
				el.innerHTML = el.innerText;
			}else{
				el.style.display = "";
				el.innerHTML = gamesListSearch(el.innerText, search, inputData.length);
				
				// gamesListSearch(el.innerText, search, inputData.length);
				// console.log(inputData.length)
				
			}
		});
	}else{
		gamesList.forEach(function(el){
			el.style.display = '';
			el.innerHTML = el.innerText;
		})
	}
}

function gamesListSearch(str, pos, len){
	console.clear();
	console.log(str, pos, len)
	// console.log(str.slice(0, pos), str.slice(pos, pos+len), str.slice(pos+len))
	return str.slice(0, pos) + '<b>' + str.slice(pos, pos+len) + '</b>' + str.slice(pos+len);

}