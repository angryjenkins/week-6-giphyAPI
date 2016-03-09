var animals = ['lion','tiger','bear'];

function makeButtons(){
	//why is animals undefined? 
	var x = $('<button class="btn btn-default btn-lg">');
	var animalButtons = $('#animalButtons');
	x.addClass('animal');
	x.attr('data-name', animals[i]);
	x.text(animals[i]);

	animalButtons.append(x);

	console.log(animals[i] + " button made!");
	$('#addAnimal').val('');

	//this works, why aren't the buttons going to #animalButtons?
};

for(var i=0;i<animals.length;i++){makeButtons()};



//add animal button

$('#addAnimalButton').on('click', function(){

	var newAnimal = $('#addAnimal').val().trim();
	var animalButton = $('#animalButtons');

	animals.push(newAnimal);

	makeButtons();
	// Creates	 a new button on click
	$('#addAnimal').val('');
	return false;
});




// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

function searchGifs(){
	$('#animalFinder').empty();
};

