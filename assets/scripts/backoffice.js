const linkStriveschool = 'https://striveschool-api.herokuapp.com/api/product/'
const striveKey =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjk0Zjc4Y2RkZjAwMTU1ZDY3OWIiLCJpYXQiOjE3NTIyMTc5MzUsImV4cCI6MTc1MzQyNzUzNX0.nkp8WzrWp-EXVfqh8ItYTVngDoDj8xJH0YyJE5w2u0Y'

class workoutForm {
  constructor(_name, _description, _brand, _price, _imageUrl) {
    this.name = _name
    this.description = _description
    this.brand = _brand
    this.price = parseFloat(_price)
    this.imageUrl = _imageUrl
  }
}

const workOutForm = document.getElementById('formWorkout')
workOutForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('nameInput')
  const description = document.getElementById('descriptionInput')
  const brand = document.getElementById('typeInput')
  const price = document.getElementById('priceInput')
  const siteImg =
    'https://i.pinimg.com/originals/20/65/31/206531dad8723392acd6f54e49b9e713.jpg'

  const workoutToCreate = new workoutForm(
    name.value,
    description.value,
    brand.value,
    price.value,
    siteImg
  )
  console.log(workoutToCreate)

  fetch(linkStriveschool, {
    method: 'POST',
    body: JSON.stringify(workoutToCreate),
    headers: {
      Authorization: striveKey,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('Scheda caricata')
      } else {
        throw new Error('Errore nel caricamento con stato: ' + response.status)
      }
    })
    .then((createdProduct) => {
      console.log('Prodotto creato:', createdProduct)
    })
    .catch((error) => {
      console.log('Si è verificato un errore', error)
    })
})

const year = function () {
  const span = document.getElementById('year')
  span.innerText = new Date().getFullYear()
}
year()
