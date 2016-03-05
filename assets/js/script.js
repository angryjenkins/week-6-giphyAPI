
var animals = ['lion','tiger','bear'];
var x = $('<button>');
var animalButton = $('#animalButtons')

function makeButtons(){
	
	//why is animals undefined? 

	for (var i = 0; i < animals.length; i++){

		x.addClass('animal');
		x.attr('data-name', animals[i]);
		x.text(animals[i]);

		animalButton.append(x);

		console.log(animals[i] + " button made!");	

	}

}




// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

function searchGifs(){
	$('#animalFinder').empty();
}

makeButtons();
