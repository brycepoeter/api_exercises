let moviesList = document.getElementById("moviesList")
let moviesUrl = "http://www.omdbapi.com/?s=batman&apikey=3aa9cb61"
let featuredMovie = document.getElementById("featuredMovie")

function detailsFunction(imdbID) {
    let movieDetailsUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=3aa9cb61`
    let req = new XMLHttpRequest()
    req.open("GET", movieDetailsUrl)
    req.addEventListener("load", () => {
        let movieDetails = JSON.parse(event.currentTarget.responseText)
        featuredMovie.innerHTML = `<div>
                                    <h2>Featured movie details:</h2>
                                    <h3>${movieDetails.Title}</h3>
                                    <p>Starring ${movieDetails.Actors}</p> 
                                    <p>Written by ${movieDetails.Writer} and directed by ${movieDetails.Director}, ${movieDetails.Title} was one of the best movies of ${movieDetails.Year}.</p>
                                    <p>${movieDetails.Plot}</p>
                                    <p>IMDB rating: ${movieDetails.imdbRating}</p> 
                                </div>` 
         
   })
    req.send()
}


let req = new XMLHttpRequest
req.open("GET", moviesUrl)
req.addEventListener("load", () => {
    let movies = JSON.parse(event.currentTarget.responseText)
    let movieItems = movies.Search.map(movie => {
        return `<div>
                    <img class="moviePoster" onclick="detailsFunction('${movie.imdbID}')" src="${movie.Poster}"/> 
                </div>`
    
                })

    moviesList.innerHTML = movieItems.join("")
})


req.send()








//
//    for (i=0; i<moviePosters.length; i++) {
//        moviePosters[i].addEventListener('click', function() {
 //           console.log("Clicker wurksz")
//    })
//}
//console.log(moviePosters)
//moviePosters.map().addEventListener("click", (e) => {
//    console.log("Clicker wurkz")})

//}
