const hora = document.querySelector('.hora')
const periodo = document.querySelector('.periodo')
setTime = () => {
    const getHoraAtual = new Date()
    const horaAtual = getHoraAtual.getHours()
    const MinutoAtual = getHoraAtual.getUTCMinutes()
    hora.innerHTML = `${horaAtual}:${MinutoAtual}`
    if (horaAtual >= 12) {
        periodo.innerHTML = `PM`
    } else {
        periodo.innerHTML = `AM`
    }
}
setInterval(() => {
    setTime()
}, 1000)