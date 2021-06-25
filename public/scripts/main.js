import Modal from './modal.js';

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Quando o botão "marcar como lida" for clicado ele abre a modal 
const checkButtons = document.querySelectorAll('a.check')

checkButtons.forEach(button => {

  button.addEventListener('click', handleClick)
})

//Quando o botão delete for clicado ele abre a modal 
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))

})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? "Marcar como lida" : "Excluir"
  const slug = check ? "check" : "delete"

  //Pegando id da sala
  const roomId = document.querySelector("#room-id").dataset.id

  //Pegando dados e enviando na rota
  const form = document.querySelector('.modal form')
  form.setAttribute("action", `/room/${roomId}/:question/${slug}`)


  modalTitle.innerHTML = `${text} esta pergunta ?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
  modalButton.innerHTML= `Sim, ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

  modal.open()
}
