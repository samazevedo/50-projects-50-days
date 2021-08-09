//API MOVIE TMDB

const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=446e4e90d64a94ee8201b552ed1606c7&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=446e4e90d64a94ee8201b552ed1606c7&query=" '

const form = document.getElementById('form')
const search = document.getElementById('search')


//GET INITIAL MOVIES
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && search !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})