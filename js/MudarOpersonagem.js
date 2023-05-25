class Movewindow {
    constructor(arrow, img, sprite) {
        this.data = {}
        this.arrow = document.querySelectorAll(arrow)
        this.img = document.querySelector(img)
        this.sprite = document.querySelector(sprite)

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
                cont == 5 ? this.arrow[1].style.display = 'none' : this.arrow[1].style.display = 'block'
                cont == 0 ? this.arrow[0].style.display = 'none' : this.arrow[0].style.display = 'block'
                this.showtime(valores[cont])

            })
        })
    }
    showtime = (object) => {
        Object.entries(object).forEach((valor) => {
            if (document.querySelector(`.${valor[0]}`)) {
                document.querySelector(`.${valor[0]}`).innerHTML = valor[1]
            }
        })
        console.log(object.image)
        this.img.style.backgroundImage = `url(../${object.image})`
        this.sprite.src = object.icon
    }
}
const init = new Movewindow('.arrow', '.window', '.icon_personagem')
init.bringinfo()