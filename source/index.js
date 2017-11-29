require('./index.css')

function updateTime() {
  document.getElementById('time').innerHTML = (new Date()).toLocaleTimeString()
}

updateTime()
setInterval(updateTime, 1000)
