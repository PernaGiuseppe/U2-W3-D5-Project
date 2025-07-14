const linkStriveschool = 'https://striveschool-api.herokuapp.com/api/product/'
const striveKey =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjk0Zjc4Y2RkZjAwMTU1ZDY3OWIiLCJpYXQiOjE3NTIyMTc5MzUsImV4cCI6MTc1MzQyNzUzNX0.nkp8WzrWp-EXVfqh8ItYTVngDoDj8xJH0YyJE5w2u0Y'

const eventIDPulito =
  location.search.slice(0, 23) + location.search.slice(23).split('%')[0]
console.log(eventIDPulito)

const parameters = new URLSearchParams(eventIDPulito)
const eventId = parameters.get('eventId')

fetch(linkStriveschool + '/' + eventId, {
  headers: {
    Authorization: striveKey,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nel recupero dettaglio evento')
    }
  })
  .then((Object) => {
    console.log('dettagli', Object)
    document.getElementById('titolo').innerText = Object.name
    document.getElementById('descrizione').innerText = Object.brand
    document.getElementById('brand').innerText = Object.description
    document.getElementById('prezzo').innerText = Object.price + '€'
  })
  .catch((err) => {
    console.log('ERRORE', err)
  })
const year = function () {
  const span = document.getElementById('year')
  span.innerText = new Date().getFullYear()
}

year()
