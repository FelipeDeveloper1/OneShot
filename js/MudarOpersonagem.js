class Movewindow {
    constructor(arrow) {
        this.data = {}
        this.arrow = document.querySelectorAll(arrow)
    }
    bringinfo = async() => {
        let personagemData = await fetch("../json/personagems.json")
        this.data.personagens = await personagemData.json()
        this.teste(this.data)
    }
    teste = (data) => {
        let valores = []
        for (let values in data.personagens) {
            valores.push(data.personagens[values])
        }
        this.move(valores)
    }
    move = (valores) => {
        let cont = 0
        this.arrow[0].style.display = 'none'
        this.arrow.forEach((value, index) => {
            value.addEventListener('click', () => {
                index == 1 ? cont += 1 : cont -= 1
                cont == 2 ? this.arrow[1].style.display = 'none' : this.arrow[1].style.display = 'block'
                cont == 0 ? this.arrow[0].style.display = 'none' : this.arrow[0].style.display = 'block'
                console.log(valores[cont])
            })
        })
    }
}
const init = new Movewindow('.arrow')
init.bringinfo()