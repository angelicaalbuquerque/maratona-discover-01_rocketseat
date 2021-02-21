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

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '21/02/2021'
  }, 
  {    
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '21/02/2021'}, 
  {    
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '21/02/2021'
  }
]

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