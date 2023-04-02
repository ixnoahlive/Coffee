import Coffee from 'Coffee'

const Messages = [
    'Hello World',
    'Foobar',
    'Bingus'
]

function runOnWorldLoad() {
    ChatLib.chat(Coffee.pickRandom(Messages)) // Pseudorandom message from array
}

Coffee.runOnTrue(World.isLoaded(), runOnWorldLoad(), 1000) // Check if world is loaded every 1000ms (1s) and if it is run the function