var animals = ['lion','tiger','bear'];

function makeButtons(){
	$('#addAnimal').empty();
	//why is animals undefined? 
	var x = $('<button class="btn btn-default btn-lg">');
	var animalButton = $('#animalButtons');
	x.addClass('animal');
	x.attr('data-name', animals[i]);
	x.text(animals[i]);

	animalButton.append(x);

	console.log(animals[i] + " button made!");	
	//this works, why aren't the buttons going to #animalButtons?
};

for(var i=0;i<animals.length;i++){makeButtons()};



//add buttons - still allowing repeat buttons.	

$('#animalButtons').on('click', function(){

	var newAnimal = $('#addAnimal').val().trim();
	var animalButton = $('#animalButtons');

	animals.push(newAnimal);

	makeButtons();
	// Creates	 a new button on click
	return false;
});




// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

function searchGifs(){
	$('#animalFinder').empty();
};

