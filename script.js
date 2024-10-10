var nextPlayerDelay = 5000
var firstCrdErrDelay = nextPlayerDelay/2

var cCardName = 'cCard'

var dialog = document.body.getElementsByTagName('dialog')[0]

let header = document.body.querySelector('.header')
let headUl = header.getElementsByTagName('ul')[0]

let main = document.body.querySelector('.main')
let cardEle = main.querySelector('div#card')
let nameEleS = card.querySelectorAll('span.name')
let iconEle = card.querySelector('span#icon > div')

let decks = document.body.querySelector('.decks')
var user1DeckEle = decks.querySelector('ul#user-1-deck ul:last-child')
var user2DeckEle = decks.querySelector('ul#user-2-deck ul:last-child')

let startNFontSize = '6.932409012131716vh /*40px*/'
let deckIS = {
  user1Deck: 0, 
  user2Deck: 0, 
}

var bListSCards = [
  '+2', 
  '+4', 
  '🚫', 
  '🔀', 
]

var hexES = {
  red: 'D72600', 
  yellow: 'ECD407', 
  green: '379711', 
  blue: '0956BF', 
}
let rgbS = {
  'rgb(215, 38, 0)': 'red', 
  'rgb(236, 212, 7)': 'yellow', 
  'rgb(55, 151, 17)': 'green', 
  'rgb(9, 86, 191)': 'blue', 
  'rgb(0, 0, 0)': 'black', 
}
var tColors = {
  black: 'white', 
}

var emojis = {
  '🚫': '5.37261698440208vh /*31px*/', 
  '🔀': '5.37261698440208vh /*31px*/', 
}

var user1Deck = []
var user2Deck = []

var dNames = {
  user1Deck: user1Deck, 
  user2Deck: user2Deck, 
}

var oppDNames = {
  user1Deck: 'user2Deck', 
  user2Deck: 'user1Deck', 
}

var dEles = {
  user1Deck: user1DeckEle, 
  user2Deck: user2DeckEle, 
}

var cDeck = 'user1Deck'

var placedCards = []

var drawDeck = [
  {
    name: '0', 
    color: 'red', 
  }, 
  {
    name: '0', 
    color: 'green', 
  }, 
  {
    name: '0', 
    color: 'yellow', 
  }, 
  {
    name: '0', 
    color: 'yellow', 
  }, 
  {
    name: '1', 
    color: 'red', 
  }, 
  {
    name: '1', 
    color: 'red', 
  }, 
  {
    name: '1', 
    color: 'green', 
  }, 
  {
    name: '1', 
    color: 'green', 
  }, 
  {
    name: '1', 
    color: 'yellow', 
  }, 
  {
    name: '1', 
    color: 'yellow', 
  }, 
  {
    name: '1', 
    color: 'blue', 
  }, 
  {
    name: '1', 
    color: 'blue', 
  }, 
  {
    name: '2', 
    color: 'red', 
  }, 
  {
    name: '2', 
    color: 'red', 
  }, 
  {
    name: '2', 
    color: 'green', 
  }, 
  {
    name: '2', 
    color: 'green', 
  }, 
  {
    name: '2', 
    color: 'yellow', 
  }, 
  {
    name: '2', 
    color: 'yellow', 
  }, 
  {
    name: '2', 
    color: 'blue', 
  }, 
  {
    name: '2', 
    color: 'blue', 
  }, 
  {
    name: '3', 
    color: 'red', 
  }, 
  {
    name: '3', 
    color: 'red', 
  }, 
  {
    name: '3', 
    color: 'green', 
  }, 
  {
    name: '3', 
    color: 'green', 
  }, 
  {
    name: '3', 
    color: 'yellow', 
  }, 
  {
    name: '3', 
    color: 'yellow', 
  }, 
  {
    name: '3', 
    color: 'blue', 
  }, 
  {
    name: '3', 
    color: 'blue', 
  }, 
  {
    name: '4', 
    color: 'red', 
  }, 
  {
    name: '4', 
    color: 'red', 
  }, 
  {
    name: '4', 
    color: 'green', 
  }, 
  {
    name: '4', 
    color: 'green', 
  }, 
  {
    name: '4', 
    color: 'yellow', 
  }, 
  {
    name: '4', 
    color: 'yellow', 
  }, 
  {
    name: '4', 
    color: 'blue', 
  }, 
  {
    name: '4', 
    color: 'blue', 
  }, 
  {
    name: '5', 
    color: 'red', 
  }, 
  {
    name: '5', 
    color: 'red', 
  }, 
  {
    name: '5', 
    color: 'green', 
  }, 
  {
    name: '5', 
    color: 'green', 
  }, 
  {
    name: '5', 
    color: 'yellow', 
  }, 
  {
    name: '5', 
    color: 'yellow', 
  }, 
  {
    name: '5', 
    color: 'blue', 
  }, 
  {
    name: '5', 
    color: 'blue', 
  }, 
  {
    name: '6', 
    color: 'red', 
  }, 
  {
    name: '6', 
    color: 'red', 
  }, 
  {
    name: '6', 
    color: 'green', 
  }, 
  {
    name: '6', 
    color: 'green', 
  }, 
  {
    name: '6', 
    color: 'yellow', 
  }, 
  {
    name: '6', 
    color: 'yellow', 
  }, 
  {
    name: '6', 
    color: 'blue', 
  }, 
  {
    name: '6', 
    color: 'blue', 
  }, 
  {
    name: '7', 
    color: 'red', 
  }, 
  {
    name: '7', 
    color: 'red', 
  }, 
  {
    name: '7', 
    color: 'green', 
  }, 
  {
    name: '7', 
    color: 'green', 
  }, 
  {
    name: '7', 
    color: 'yellow', 
  }, 
  {
    name: '7', 
    color: 'yellow', 
  }, 
  {
    name: '7', 
    color: 'blue', 
  }, 
  {
    name: '7', 
    color: 'blue', 
  }, 
  {
    name: '8', 
    color: 'red', 
  }, 
  {
    name: '8', 
    color: 'red', 
  }, 
  {
    name: '8', 
    color: 'green', 
  }, 
  {
    name: '8', 
    color: 'green', 
  }, 
  {
    name: '8', 
    color: 'yellow', 
  }, 
  {
    name: '8', 
    color: 'yellow', 
  }, 
  {
    name: '8', 
    color: 'blue', 
  }, 
  {
    name: '8', 
    color: 'blue', 
  }, 
  {
    name: '9', 
    color: 'red', 
  }, 
  {
    name: '9', 
    color: 'red', 
  }, 
  {
    name: '9', 
    color: 'green', 
  }, 
  {
    name: '9', 
    color: 'green', 
  }, 
  {
    name: '9', 
    color: 'yellow', 
  }, 
  {
    name: '9', 
    color: 'yellow', 
  }, 
  {
    name: '9', 
    color: 'blue', 
  }, 
  {
    name: '9', 
    color: 'blue', 
  }, 
  {
    name: '+2', 
    color: 'red', 
  }, 
  {
    name: '+2', 
    color: 'red', 
  }, 
  {
    name: '+2', 
    color: 'green', 
  }, 
  {
    name: '+2', 
    color: 'green', 
  }, 
  {
    name: '+2', 
    color: 'yellow', 
  }, 
  {
    name: '+2', 
    color: 'yellow', 
  }, 
  {
    name: '+2', 
    color: 'blue', 
  }, 
  {
    name: '+2', 
    color: 'blue', 
  }, 
  {
    name: '🚫', 
    color: 'red', 
  }, 
  {
    name: '🚫', 
    color: 'red', 
  }, 
  {
    name: '🚫', 
    color: 'green', 
  }, 
  {
    name: '🚫', 
    color: 'green', 
  }, 
  {
    name: '🚫', 
    color: 'yellow', 
  }, 
  {
    name: '🚫', 
    color: 'yellow', 
  }, 
  {
    name: '🚫', 
    color: 'blue', 
  }, 
  {
    name: '🚫', 
    color: 'blue', 
  }, 
  {
    name: '🔀', 
    color: 'red', 
  }, 
  {
    name: '🔀', 
    color: 'red', 
  }, 
  {
    name: '🔀', 
    color: 'green', 
  }, 
  {
    name: '🔀', 
    color: 'green', 
  }, 
  {
    name: '🔀', 
    color: 'yellow', 
  }, 
  {
    name: '🔀', 
    color: 'yellow', 
  }, 
  {
    name: '🔀', 
    color: 'blue', 
  }, 
  {
    name: '🔀', 
    color: 'blue', 
  }, 
  {
    name: 'wild', 
    color: 'black', 
  }, 
  {
    name: 'wild', 
    color: 'black', 
  }, 
  {
    name: 'wild', 
    color: 'black', 
  }, 
  {
    name: 'wild', 
    color: 'black', 
  }, 
  {
    name: '+4', 
    color: 'black', 
  }, 
  {
    name: '+4', 
    color: 'black', 
  }, 
  {
    name: '+4', 
    color: 'black', 
  }, 
  {
    name: '+4', 
    color: 'black', 
  }, 
]
var oDrawDeck = drawDeck

var drawDeckLen = drawDeck.length

function randomCard() {
  let num = Math.floor(Math.random() * drawDeckLen)
  let card = drawDeck[num]
  let name = card['name']
  let isOk = true
  bListSCards.forEach(c => {
    if (name === c) {
      isOk = false
    }
  })
  if (isOk === false) {
    headUl.style.display = 'none'
    setTimeout(function() {randomCard()}, firstCrdErrDelay)
  }
  else {
    headUl.style.display = ''
  }
  let color = card['color']
  drawDeck.splice(num, 1)
  setCard(name, color)
}
randomCard()

function setCard(name, color) {
  if (!!hexES[color]) cardEle.style.backgroundColor = `#${hexES[color]}`
  else cardEle.style.backgroundColor = color
  nameEleS.forEach(e => {
    e.style.color = 'black'
    e.innerHTML = name
    let fSize = startNFontSize
    if (!!tColors[color]) e.style.color = tColors[color]
    if (!!emojis[name]) fSize = emojis[name]
    else if (name.split('').length > 1) {
      fSize = `calc(${startNFontSize.split('vh')[0]}vh/${name.split('').length-1})${startNFontSize.split('vh')[1]}`
    }
    e.style.fontSize = fSize
  })
  iconEle.innerHTML = name
  placedCards.push({
    name: name, 
    color: color, 
  })
  let card = `${name}:${color}`
  return card
}

function newGame() {
  placedCards = []
  drawDeck = oDrawDeck
  shuffleCards()
  dEles['user1Deck'].innerHTML = ''
  dEles['user2Deck'].innerHTML = ''
  randomCard()
}

function drawCard(deck=cDeck, mode='card') {
  let dName = deck
  deck = dNames[deck]
  if (drawDeck.length === 0) {
    let placeCrd = placedCards.pop()
    drawDeck = placedCards
    placedCards.push(placeCrd)
    shuffleCards()
  }
  let num = Math.floor(Math.random() * drawDeck.length)
  let card = drawDeck[num]
  while (!!card === false) {
    num = Math.floor(Math.random() * drawDeck.length)
    card = drawDeck[num]
  }
  drawDeck.splice(num, 1)
  if (card['name'] === 'wild' || card['name'] === '+4') {
    card['color'] = 'black'
  }
  deck.push(card)
  deck[deck.length-1]['data-index'] = deck.length-1
  let name = card['name']
  let color = card['color']
  if (!!hexES[color]) color = `#${hexES[color]}`
  
  let li = document.createElement('li')
  li.className = 'card'
  li.setAttribute('data-index', deckIS[dName])
  if (!!tColors[color]) li.style.color = tColors[color]
  li.style.backgroundColor = color
  li.setAttribute('onclick', `placeCard(${deckIS[dName]}, '${dName}')`)
  li.innerHTML = `<span>${name}</span>`

  var deckEle = false
  if (dName === 'user1Deck') deckEle = user1DeckEle
  else if (dName === 'user2Deck') deckEle = user2DeckEle
  deckEle.appendChild(li)

  if (mode === 'user') {
    setTimeout(function() {
      placeCard(deckIS[dName]-1, dName)
    }, 1000)
  }
  deckIS[dName]++
}

function placeCard(num, deck) {
  let dName = deck
  deck = dNames[deck]
  var person = false
  var deckEle = dEles[dName]
  if (dName === 'user1Deck') person = 'User #1'
  else if (dName === 'user2Deck') person = 'User #2'
  let cardEle = deckEle.querySelector(`li[data-index="${num}"]`)
  let name = cardEle.querySelector('span').innerHTML
  let color = cardEle.style.backgroundColor
  if (!!rgbS[color]) color = rgbS[color]
  if (checkCard(name, color) || color === 'black') {
    cardEle.remove()
    if (color === 'black') {
      let uColor = prompt('What color do you want? (R, Y, G, B)').toLowerCase()
      uColor = fixWildColors(uColor)
      color = uColor
    }
    
    setCard(name, color)
    let oppDName = oppDNames[dName]
    if (name === '+2') {
      drawCard(oppDName)
      drawCard(oppDName)
    }
    else if (name === '+4') {
      drawCard(oppDName)
      drawCard(oppDName)
      drawCard(oppDName)
      drawCard(oppDName)
    }
    
    if (deckEle.getElementsByTagName('li').length === 1) {
      showScreen('UNO', [person])
    }
    if (deckEle.getElementsByTagName('li').length === 0) {
      document.body.querySelectorAll('decks > *').forEach(e => {
        e.style.display = 'none'
      })
      showScreen('end', [person])
    }
    else {
      if (name === '+2' || name === '+4' || name === '🚫' || name === '🔀') {
        skipTurn(dName)
      }
      else {
        changeTurn(dName)
      }

      cDeck = oppDNames[dName]
    }
  }
}

function startCards(deck) {
  let dName = deck
  deck = dNames[deck]
  drawCard(dName)
  drawCard(dName)
  drawCard(dName)
  drawCard(dName)
  drawCard(dName)
  drawCard(dName)
  drawCard(dName)
//  drawCard(dName)
}

function checkCard(name, color) {
  if (!!rgbS[color]) color = rgbS[color]
//  alert(`${name}:${color}`)
  let currCard = placedCards[placedCards.length-1]
  let cName = currCard['name']
  let cColor = currCard['color']
  if (!!rgbS[cColor]) cColor = rgbS[cColor]
  if (color === 'black') color = cColor
//  alert((color === 'black' || cColor === 'black') || (name === cName || color === cColor))
  if (name === cName || color === cColor) return true
  else return false
}

function startGame() {
  dEles['user2Deck'].parentNode.style.display = 'none'
  startCards('user1Deck')
  startCards('user2Deck')
  headUl.querySelector('li[data-onclick="newGame()"]').style.display = ''
  headUl.querySelector('li[onclick="startGame()"]').style.display = 'none'
  document.querySelectorAll('[data-onclick]').forEach(e => {
    e.setAttribute('onclick', e.getAttribute('data-onclick'))
    e.removeAttribute('data-onclick')
  })
}

function skipTurn(deck) {
  let dName = deck
  deck = dNames[dName]
  var deckEle = false
  if (dName === 'user1Deck') deckEle = user1DeckEle
  else if (dName === 'user2Deck') deckEle = user2DeckEle
  dEles[oppDNames[dName]].parentNode.style.display = 'none'
  deckEle.parentNode.style.display = 'none'
  deckEle.parentNode.style.display = ''

  cDeck = oppDNames[dName]
}

function showScreen(scr, par) {
  scr = scr.toLowerCase()
  let dInnerHTML = '<span>{content}</span>'
  if (scr === 'uno') {
    dInnerHTML = dInnerHTML.replace('{content}', `UNO for ${par[0].toLowerCase()}!`)
  }
  if (scr === 'end') {
    dInnerHTML = dInnerHTML.replace('{content}', `${par[0]} Won!`)
    decks.querySelectorAll('ul').forEach(ul => {
      ul.remove()
    })
  }
  dialog.innerHTML = dInnerHTML
  dialog.showModal()
  let eListens = [
    'onkeydown', 
    'onkeypress', 
    'onkeyup', 
  ]
  eListens.forEach(ev => {
    dialog.addEventListener(ev, function(event) {
      event.preventDefault()
    })
  })
}

function randomNumber(num) {
  return Math.floor(Math.random() * num)
}

function shuffleCards() {
  let array = drawDeck
    for (var i = 0; i < drawDeckLen; i++) {
      // Generate random number 
      var num = randomNumber(drawDeckLen);
      var temp = array[i];
      array[i] = array[num];
      array[num] = temp;
    }
  drawDeck = array
}
shuffleCards()

function fixWildColors(c) {
  c = c.toLowerCase()
  if (c === 'r') c = 'red'
  else if (c === 'y') c = 'yellow'
  else if (c === 'g') c = 'green'
  else if (c === 'b') c = 'blue'
  else if (c === 'red') {}
  else if (c === 'yellow') {}
  else if (c === 'green') {}
  else if (c === 'blue') {}
  else c = false
  return c
}

function changeTurn(dName) {
  dEles[dName].parentNode.style.display = 'none'
  setTimeout(function() {
    dEles[oppDNames[dName]].parentNode.style.display = ''
    dEles[oppDNames[dName]].style.display = 'none'
dEles[oppDNames[dName]].parentNode.querySelector('ul:first-child .show').style.display = ''
  }, nextPlayerDelay)
}

function showDeck(dName) {
  dEles[dName].style.display = ''
  dEles[dName].parentNode.querySelector('ul:first-child .show').style.display = 'none'
}