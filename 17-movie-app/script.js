//API MOVIE TMDB
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=446e4e90d64a94ee8201b552ed1606c7&page=1'
// const API_URL_TV = 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=446e4e90d64a94ee8201b552ed1606c7&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=446e4e90d64a94ee8201b552ed1606c7&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


//GET INITIAL MOVIES
getMovies(API_URL)
// getTv(API_URL_TV)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
    //console.log(data.results)
}
// async function getTv(url) {
//     const res = await fetch(url)
//     const data = await res.json()
//     showTv(data.results)
//     //console.log(data.results)
// }
// function showTv(tv) {
//     tvBtn.addEventListener('click'), (tv) => {
//         main.innerText = ''
//         tv.forEach((tvshow) => {
//             const { title, poster_path, vote_average, overview } = tvshow

//             const movieEl = document.createElement('div')
//             movieEl.classList.add('movie')
//             movieEl.innerHTML = `
//             <img src="${IMG_PATH + poster_path}" alt="${title}">
//             <div class="movie-info">
//                 <h3>${title}</h3>
//                 <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//             </div>
//             <div class="overview">
//             <h3>Overview</h3>
//             ${overview}
//             </div>
//             </div>
//             `
//             main.appendChild(movieEl)

//         });
//     }
// }

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview</h3>
        ${overview}
        </div>
        </div>
        `
        main.appendChild(movieEl)

    });
}
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
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