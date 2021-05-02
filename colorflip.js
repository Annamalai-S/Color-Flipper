const value = document.getElementById('hex') ;
const page = document.querySelector('body') ;
const btn = document.querySelector('#flipper') ;
var hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', '	B', 'C', 'D', 'E', 'F' ];

function generateRandom(){
	var random = Math.floor(Math.random() * 15) ;
	return random;
}

function colorFlipper(){
	var hexcode = '#' ;
	for (i = 0; i <  6; i++){
		hexcode += hex[generateRandom()] ;
	}
	return hexcode ;
}
btn.addEventListener('click', () => {	
	color = colorFlipper() ;
	page.style.backgroundColor = color ;
	value.innerHTML = color ;
	btn.style.color =  color ;
});

