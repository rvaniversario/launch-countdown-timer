const items = document.querySelectorAll('.launch h2')
const launch = document.querySelector('.launch')
const title = document.querySelector('.title')

let current = new Date()
let currentYear = current.getFullYear()
let currentMonth = current.getMonth()

const future = new Date(currentYear, currentMonth, 30, 11, 30, 0)

const futureTime = future.getTime()
function getRemaindingTime() {
  const today = new Date().getTime()

  const difference = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = difference / oneDay
  days = Math.floor(days)
  let hours = Math.floor((difference % oneDay) / oneHour)
  let minutes = Math.floor((difference % oneHour) / oneMinute)
  let seconds = Math.floor((difference % oneMinute) / 1000)

  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

  if (difference < 0) {
    clearInterval(countdown)
    launch.innerHTML = `<h2>We're Open!!!</h2>`
    title.style.display = 'none'
  }
}

let countdown = setInterval(getRemaindingTime, 1000)

getRemaindingTime()



