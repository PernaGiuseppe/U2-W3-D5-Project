const linkStriveschool = 'https://striveschool-api.herokuapp.com/api/product/'

const getElemets = () => {
  fetch(linkStriveschool, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjk0Zjc4Y2RkZjAwMTU1ZDY3OWIiLCJpYXQiOjE3NTIyMTc5MzUsImV4cCI6MTc1MzQyNzUzNX0.nkp8WzrWp-EXVfqh8ItYTVngDoDj8xJH0YyJE5w2u0Y',
    },
  })
    .then((response) => {
      console.log('Strive trovato', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nel caricamento di Strive', response.status)
      }
    })
    .then((data) => {
      console.log(data)
      const section = document.getElementById('sectioncards')
      data.forEach((Object) => {
        section.innerHTML += `<div class="col col-sm-6 col-md-4 col-lg-2 my-1">
            <div class="card">
              <img
                src=${Object.imageUrl}
                class="card-img-top"
                alt="workout-program"/>
              <div class="card-body">
                <h5 class="card-title mb-3">${Object.name}</h5>
                <p class="card-text">${Object.description}</p>
                <p class="card-text">${Object.brand}</p>
                <p class="card-text">${Object.price} €</p>
                <a href="./dettagli.html?eventId=${Object._id}
                  }" class="btn btn-primary">Dettagli</a>
              </div>
            </div>
          </div>`
      })
    })
    .catch((error) => {
      console.log('Si è verificato un errore', error)
    })
}
const year = function () {
  const span = document.getElementById('year')
  span.innerText = new Date().getFullYear()
}
getElemets()
year()

// flex-grow-1
