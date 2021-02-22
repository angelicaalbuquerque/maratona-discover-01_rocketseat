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
  },
  {    
    id: 4,
    description: 'App',
    amount: 20000,
    date: '21/02/2021'
  }
]

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

// TODO - Eu preciso substituir os dados do HTML com os dados do JavaScript
const DOM = {

  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction) {
    const html = `
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="assets/minus.svg" alt="remover transação">
        </td>
    `
    return html
  }
}

transactions.forEach(function(transaction) {
  DOM.addTransaction(transaction)
})

