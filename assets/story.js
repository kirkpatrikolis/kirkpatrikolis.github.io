	
var code = document.querySelector('.content');
window.addEventListener('mousemove', function(l){
	code.style.backgroundColor = 'rgba('+l.clientX+', '+l.clientY+', 20)';
});

var modalappear = document.querySelector('.classbtn');
modalappear.addEventListener('click', displaymodal);
var gone = document.querySelector('.firstmodal-content');
gone.addEventListener('click', disappear)
var closing = document.querySelector('.highlights');
closing.addEventListener('click', closemode);



var beginmodal = document.querySelector('.firstmodal-content');

function displaymodal(){
	beginmodal.style.display = 'block';
}

function closemode(){
	beginmodal.style.display = 'none';
}

function disappear(v){
	if(v.target == beginmodal){
	beginmodal.style.display = 'none';
	}
	console.log(v.target);
}






