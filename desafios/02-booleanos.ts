// Boleanos

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const minimumHeightToToy = 130

const currentHour = new Date().getHours()

const isParkWorking = currentHour > 9 && currentHour < 18

if (!isParkWorking) {
  throw new Error('O parque está fechado!')
}

const doesUserHaveParkTicket = user.hasTicket

if (!doesUserHaveParkTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const isUserTallEnoughToToy = user.height > minimumHeightToToy

if (!isUserTallEnoughToToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')