const Modal = {
  open() {
    //Abrir Modal
    //Adicionar a classe active ao Modal
    document
      .querySelector('.modal-overlay')
      .classList.add('active')
  },
  close() {
    //Fechar o Modal
    //Remover a classe active do Modal
    document
      .querySelector('.modal-overlay')
      .classList.remove('active')
  }
}