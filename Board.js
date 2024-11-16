let board = document.querySelector('.board-container');
let clean = document.querySelector('.clean-button');
let erase = document.querySelector('.eraser-img');
let pencil = document.querySelector('.pencil-img')
let color = document.querySelector('.colors-container')
let curcolor = "black";
let accept_to_drow = false
let is_drown = false;
let accept_to_erase = false;
let clean_by_erase = false;

pencil.addEventListener('click', function(){
	accept_to_erase = false;
	accept_to_drow = true;	
})
erase.addEventListener('click', function(){
	accept_to_drow = false;
	accept_to_erase = true;	
})

color.addEventListener('click', function(e){
	if(e.target.classList[1] === "color"){
		curcolor = e.target.classList[0]	
	}
})

for (let i = 0; i < 20000; i++) { 
	let pixel = document.createElement('div'); 
	pixel.classList.add('pixel'); 
	board.append(pixel);

	pixel.addEventListener('mousedown', function(){
		if(accept_to_drow === true && accept_to_erase === false){
			is_drown = true;
			clean_by_erase = false;
		}
		else if(accept_to_drow === false && accept_to_erase === true){
			is_drown = false;
			clean_by_erase = true;
		}
	})

	pixel.addEventListener('mouseup', function(){
		is_drown = false;
		clean_by_erase = false;
	})

	pixel.addEventListener('mousemove', function(){
		if(is_drown === true && clean_by_erase === false){
			pixel.style.background = curcolor;
		}
		else if(is_drown === false && clean_by_erase === true){
			pixel.style.background = "white";
		}
	})

	clean.addEventListener('click', function(){
		pixel.style.background = "white";
	})
}


