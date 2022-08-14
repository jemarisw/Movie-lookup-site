console.log ("using vite");

document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();
    var movie = document.getElementById("movie").value;
    var years = document.getElementById("years").value;
    
    var form = document.getElementById('form');
    var apiKey = document.getElementById('apiKey').value;

    if(apiKey && movie){
        movieCall();
    }
    else{
        var wrong = document.getElementById('wrong');
        wrong.textContent = 'Search requirements not met. Please try again';
        console.log('error message');
    }
    function movieCall(){
        var apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}&y=${years}`
        fetch(apiUrl)
  .then( response => {
    if (!response.ok) {
        var apiError = document.getElementById('apiError');
        error.textContent = 'No Search Results.  Please Try Again';
        console.log('error message');  
      throw new Error(`HTTP error: ${response.status}`);
    }
console.log(response);
    return response.json();
  })
  .then( movieData => {console.log(movieData)
    
//display title, year, rating, release date, poster 
     var poster = document.getElementById('poster');
     poster.setAttribute("src", movieData.Poster);
     var identity = document.getElementById('identity');
     identity.textContent = movieData.Title;
     var date = document.getElementById('date');
     date.textContent = movieData.Year;
     var rate = document.getElementById('rate');
     rate.textContent = movieData.Rated;
     var release = document.getElementById('release');
     release.textContent = movieData.Released;
     console.log(movieData.Title);
     console.log(movieData.Year);
     console.log(movieData.Rated);
     console.log(movieData.Released);
     console.log(movieData.Poster);
}
  );
    }
    
    form.reset();
})