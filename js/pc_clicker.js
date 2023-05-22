const apps = {
    oneshotvideo: document.querySelector('.oneshotvideo'),
    ajuda: document.querySelector(".ajuda"),
    arquivos: document.querySelector(".arquivos")
}
const appUtilizado = document.querySelector(".AppUtilizado")


Object.values(apps).forEach((value, index) => {
    value.addEventListener('click', () => {
        appUtilizado.innerHTML = `${value.name}`
    })
})