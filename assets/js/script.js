var animals = ['lion','tiger','bear'];
var animalButtons = $('#animalButtons');

function makeButtons(){
	//why is animals undefined? 
	var x = $('<button class="btn btn-default btn-lg">');
	x.addClass('animal');
	x.attr('data-animal', animals[i]);
	x.text(animals[i]);

	animalButtons.append(x);

	console.log(animals[i] + " button made!");

	//this works, why aren't the buttons going to #animalButtons?
};

for(var i=0;i<animals.length;i++){makeButtons()};



//add animal button

$('#addAnimalButton').on('click', function(){

	var newAnimal = $('#addAnimal').val().trim();

	console.log(newAnimal);

	animals.push(newAnimal);

	makeButtons();
	$('#addAnimal').val('');

	// Creates	 a new button on click
	return false;
});




// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC


//text field search
$('#gifSearch').on('click', function() {
    $('#animalGIFs').empty();

    var animal = $('#gifRequest').val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

            console.log(queryURL);

            console.log(response)

            // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

            //------------put step 2 in between these dashes--------------------
            var results = response.data;
            //--------------------------------

            for (var i = 0; i < results.length; i++) {

                /* step 3: 
                    * uncomment the for loop above and the closing curly bracket below
                    * make a div and reference it in a variable named animalDiv
                    * make a paragraph tag and put it in a variable named p
                        * set the text of the paragraph to the rating of the image in results[i]
                    * make an image and reference it in a variable named animalImage
                    * set the image's src to results[i]'s fixed_height.url 

                    * append the p variable to the animalDiv variable
                    * append the animalImage variable to the animalDiv variable

                    * prepend the animalDiv variable to the element with an id of gifsAppearHere

                */

                //------------put step 3 in between these dashes--------------------
                var animalDiv = $('<div>');

                var p = $('<p>').text("Rating: " + results[i].rating);

                var animalImage = $('<img>');
                animalImage.attr('src', results[i].images.fixed_height.url);

                animalDiv.addClass('col-md-6');
                animalDiv.append(p);
                animalDiv.append(animalImage);

                $('#animalGIFs').append(animalDiv);
    			$('#gifRequest').val('');

                //--------------------------------
            }

        });
    });


//button search

$('.animal').on('click', function() {
     $('#animalGIFs').empty();

    var animal = $(this).data('animal');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
   
   console.log(animal);

    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

            console.log(queryURL);

            console.log(response)

            // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

            //------------put step 2 in between these dashes--------------------
            var results = response.data;
            //--------------------------------

            for (var i = 0; i < results.length; i++) {

                /* step 3: 
                    * uncomment the for loop above and the closing curly bracket below
                    * make a div and reference it in a variable named animalDiv
                    * make a paragraph tag and put it in a variable named p
                        * set the text of the paragraph to the rating of the image in results[i]
                    * make an image and reference it in a variable named animalImage
                    * set the image's src to results[i]'s fixed_height.url 

                    * append the p variable to the animalDiv variable
                    * append the animalImage variable to the animalDiv variable

                    * prepend the animalDiv variable to the element with an id of gifsAppearHere

                */

                //------------put step 3 in between these dashes--------------------
                var animalDiv = $('<div>');

                var p = $('<p>').text("Rating: " + results[i].rating);

                var animalImage = $('<img>');
                animalImage.attr('src', results[i].images.fixed_height.url);

                animalDiv.addClass('col-md-6');
                animalDiv.append(p);
                animalDiv.append(animalImage);

                $('#animalGIFs').append(animalDiv);
                //--------------------------------
            }

        });
    });