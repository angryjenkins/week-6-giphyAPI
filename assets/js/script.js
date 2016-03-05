

function makeButtons(){
	var animals = ["lion","tiger","bear","zebra","llama","cow","horse","ostrich","pig","squirrel","hamster"];
	
	$('#animalFinder').empty();

	for (var i = 0; i < animals.length; i++){
		var x = $('<button class="col-sm-6 col-md-4 col-lg-2 btn btn-default btn-sm">');

		x.addClass('animal');
		x.attr('data-name', animals[i]);
		x.text(animals[i]);
		$('#animalPicker').append(x);
	}

	console.log("buttons made!");	
}

makeButtons();

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

function searchGifs(){
	//sea
}