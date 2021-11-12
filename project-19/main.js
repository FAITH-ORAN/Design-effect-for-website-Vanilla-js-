const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aou', 'sep', 'oct', 'nov', 'dec']

// dark mode

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  }else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})

function setTime () {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hour = time.getHours() 
  const hourForClock = hour % 12
  const minute = time.getMinutes()
  const second = time.getSeconds()

  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

  timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}`:
minute}`

 dateEl.innerHTML = `${days[day]} <span class="circle">${date}</span>, ${months[month]}`
}

const scale =(num,in_min,in_max,out_min,out_max)=>{
    return (num - in_min)*(out_max -out_min)/(in_max - in_min)+ out_min
}
setTime()

setInterval(setTime,1000)