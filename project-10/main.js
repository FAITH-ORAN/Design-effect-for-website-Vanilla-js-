
const jokeL = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')
btn.addEventListener('click', generateJoke)

generateJoke()
// fetch prend comme argument l'url du site de l'Api, ensuite les info du header
// le header renvoie une promesse
// fetch async je dois attendre pour avoir une reponse
function generateJoke () {
  const config1 = {
    headers: {
      Accept: 'application/json'// header prend une clé et une valeur
    }
  }
  fetch('https://icanhazdadjoke.com', config1)
    .then((response) => response.json())
    .then((data) => {
      jokeL.innerHTML = data.joke
    })
}

function translate () {
  fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
      'x-rapidapi-key': 'df80df2dfcmshf88176e2bffb0cep12e07ajsneff1218044ca'
    }
  })
    .then(response => {
      console.log(response)
})
    .catch(err => {
      console.error(err)
})
}
// si je n'utilise pas then, j'utilise les mots clé ASYNC/AWAIT
translate()
