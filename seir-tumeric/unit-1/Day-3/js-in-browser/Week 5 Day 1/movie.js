//variable for api key
const apiKey = "6f61571d"

// variable for base url
const baseURL = "http://www.omdbapi.com/"

// function that does movie search
function movieSearch(title){
    // constructing url for request
    const url = `${baseURL}?t=${title}&apikey=${apiKey}`
    
    // make our request
    $.ajax(url)
    .then((movie) => {
        console.log(movie)

        // render the data
        const $main = $("main")
        $main.empty()

        $main.html(`
        <h1>${movie.Title}</h1>
        <img src="${movie.Poster}">
        `)
    })

}

// grab the submit button, put a click event on it
$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    movieSearch(inputText)
})

movieSearch("The Stupids")














