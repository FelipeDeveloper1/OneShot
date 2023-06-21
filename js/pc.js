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

class CloseAndOpen {
    constructor(minimize, pc, appAtual) {
        this.minimize = document.querySelector(minimize)
        this.pc = document.querySelector(pc)
        this.appAtual = document.querySelector(appAtual)
    }



    executeMinimize = () => {
        this.minimize.addEventListener('click', () => {
            this.pc.style.display = 'none'
        })
    }
    executeAppAtual = () => {
        this.appAtual.addEventListener('click', () => {
            this.pc.style.display = 'block'
        })
    }
    call = () => {
        this.executeMinimize()
        this.executeAppAtual()
    }
}

const AbleFunctions = new CloseAndOpen('.minimize', ".window", '.app_atual')
AbleFunctions.call()