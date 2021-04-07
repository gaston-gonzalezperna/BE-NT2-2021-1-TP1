const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let contadorElementos = 0

  function addTodo() {
    var dato = window.prompt("Introduce tu Tarea a Realizar")
    if(dato !== null && dato !== ''){
      agregarElementoTODO(dato, list)
    }
    contarCheckbox()
  }

  function agregarElementoTODO(dato, list){
    var elementoLista = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    elementoLista.append(checkbox)
    elementoLista.append(dato)
    list.append(elementoLista)
    sumarElemento()
  }

  function sumarElemento(){
    contadorElementos++
    itemCountSpan.innerHTML = contadorElementos
  }

  //No estoy seguro como hacer para que esto cargue sin tener que hacer click en el boton de agregar elemento, pero bueno, funciona asi
  function contarCheckbox(){
    uncheckedCountSpan.innerHTML = document.querySelectorAll('input[type=checkbox]:not(:checked)').length
  }