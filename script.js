const Modal = {
  open() {
      //abrir modal
      //adicionar a class active modal 
      document.querySelector('.background')
      .classList.add('active')
  },
  close () {
     //fehar modal
     //remover a class active modal
  document.querySelector('.background')
      .classList.remove('active')
  }
}

function insert (num) {
  let number = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = number + num;
}

function clean () {
  document.getElementById('result').innerHTML = "";
}

function back() {
  let result = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

function calculate() {
  let result = document.getElementById('result').innerHTML;
  if(result) {
    document.getElementById('result').innerHTML = eval(result);
  }
  else {
    document.getElementById('result').innerHTML = ""
  }
}