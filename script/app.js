const jokeContent = document.querySelector('.js-joke-content');
const jokeButton = document.querySelector('.js-joke-button');
const jokeLoader = document.querySelector('.js-joke-loader');

let loadingDelayed;

const fetchJoke = () =>{
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    }).then((response) => response.json())
}

const showLoader = () =>{
    loadingDelayed = setTimeout(() => {
        jokeLoader.classList.remove('u-hidden');
    }, 500)
    jokeContent.classList.add('u-hidden');
}
const removeLoader = () =>{
    if(loadingDelayed) {
        clearTimeout(loadingDelayed);
        loadingDelayed = null;
    }

    jokeLoader.classList.add('u-hidden');
    jokeContent.classList.remove('u-hidden');
}

const generateJoke = async () => {
    showLoader();
    const {joke} = await fetchJoke();
    jokeContent.innerHTML = joke;
    removeLoader();
}

const init = function () {
    console.log('script loaded');
    // generateJoke();
    jokeButton.addEventListener('click', generateJoke);
}

init();