import './styles/style.css'

console.log('Welcome to GAME')

const tile_container = document.querySelector('.tiles')
const H = window.innerHeight
const W = window.innerWidth

const RESOLUTION = 20
const TILE_SIZE = Math.floor(W / RESOLUTION)
const TILE_COUNT = Math.floor(W / TILE_SIZE)
console.log(TILE_COUNT)

function createTiles() {
  for (let j = 0; j < H; j = j + TILE_SIZE) {
    for (let i = 0; i < W; i = i + TILE_SIZE) {
      const tile_wrapper = document.createElement('div')
      const tile = document.createElement('div')
      tile_wrapper.classList.add('tile-wrapper')
      tile.classList.add('tile')
      tile_wrapper.classList.add('tile-wrapper')
      tile_wrapper.style.width = TILE_SIZE + 'px'
      tile_wrapper.style.height = TILE_SIZE + 'px'
      // tile.style.width = '100%'
      // tile.style.height = '100%'
      tile_container.appendChild(tile_wrapper)
      tile_wrapper.appendChild(tile)
      console.log('tile created')
    }
  }
}
function createCharacter() {
  const character = document.createElement('div')
  character.classList.add('character')
  character.style.width = TILE_SIZE + 'px'
  character.style.height = TILE_SIZE + 'px'
  character.style.position = 'absolute'
  character.style.borderRadius = TILE_SIZE + 'px'
  character.style.backgroundColor = 'black'
  document.body.appendChild(character)
  // return character
}
createTiles()
createCharacter()
