const year = function () {
  const span = document.getElementById('year')
  span.innerText = new Date().getFullYear()
}
year()
