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

// Eu preciso somar as entradas; depois preciso somar as saídas e remover das entradas o valor das saídas. Assim, terei o total.
const Transaction = {
  incomes() {
    //somar as entradas
  },
  expenses() {
    //somar as saídas
  },
  total() {
    //entradas - saídas
  }
}