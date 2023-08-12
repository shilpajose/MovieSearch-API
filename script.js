function searchMovie() {
    movie = searchinput.value.trim();
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=2ac25e2a`).then(movie=>movie.json())
    .then(data=>displayData(data)).catch(error => console.error('Error fetching data:', error))
}
function displayData(dataArray) {
    poster = dataArray.Poster;
    title = dataArray.Title;
    year = dataArray.Year;
    rated = dataArray.Rated;
    released=dataArray.Released;
    director=dataArray.Director;
    actors=dataArray.Actors;
    language=dataArray.Language;

    document.getElementById('result')
                .style.display = "flex";
            document.getElementById('btnID')
                .style.display = "none";

   result.innerHTML=`
   <img src="${poster}" class="card-img-top" />
   <div class="card-body">
     <h3 class="card-title text-danger">${title}</h3>
     <p class="card-text text-light ">Year:${year}</p>
     <p class="card-text text-light bg-warning text-center">Rating:${rated}</p>
     <p class="card-text text-success">Release: ${released}</p>
     <p class="card-text text-light">Director: ${director} </p>
     <p class="card-text text-light">Actors: ${actors}</p>
     <p class="card-text text-primary">Language: ${language}</p>
   </div>
 </div>
`
}