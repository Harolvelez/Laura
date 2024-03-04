const buttonNo= document.querySelector('#no')
const buttonYes= document.querySelector('#yes')

let fontSize = 2

let message = [
    'Estas segura',
    'Mira el otro boton',
    'Piensalo bien',
    'Perra que mires el otro boton ):',
    'Hija de tu chigadera que le des al si',
    'Te voy a matar perre dale al si',
    'Laura maria montolla de los infiernos dale al si alv',
    'Porfi dale al si(llora en tercer mundista)',

]

buttonNo.addEventListener('click', ()=> {
  fontSize ++
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random()* message.length)

  buttonNo.textContent= message[indexRandom]
  
})


buttonYes.addEventListener('click', ()=> {
    document.querySelector('#message').style.display = 'flex'

})