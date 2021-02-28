const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')




function newTodo() {
  // let theUserInput = prompt('随便输入', '预输入的值')
  // console.log(theUserInput);
  // let theData=theUserInput
  document.getElementById('theMainInput').style.display='block'
 
  // let theA=document.getElementById('theMainInput')

  // console.log( document.getElementById('theMainInput') );
  var tempLi = document.createElement("li");
  var tempBtn = document.createElement("button");
  var tempSpan = document.createElement("span");
  var oUl = document.getElementsByTagName("ul")[0];

  tempBtn.innerHTML = "delete";
  tempBtn.name = "delete";

  // tempSpan.innerHTML = theData;

  tempLi.setAttribute('class','todo-list-li')
  tempLi.appendChild(tempSpan);
  tempLi.appendChild(tempBtn);
  oUl.appendChild(tempLi);

  // console.log(theData);

  document.getElementById('item-count').innerHTML = document.getElementById('todo-list').children.length - 1
}

document.getElementById('item-count').innerHTML = document.getElementById('todo-list').children.length - 1

var theCountOfList = document.querySelector('li');


theCountOfList.addEventListener('click', function(ev) {
  // if (ev.target.tagName === 'li') {
  //   ev.target.classList.toggle('checked');
  // }
  console.log(theCountOfList);
} );

function theShow() {
  document.getElementById('theMainInput').style.display='none'
}

function theTest22(){
  let theDis=document.getElementById("theInputTest").disabled
  console.log(document.getElementById("theInputTest").disabled);
  if (theDis) {
    console.log('if');
    document.getElementById("theInputTest").disabled=false
  }else{
    console.log('else');
    document.getElementById("theInputTest").disabled=true
  } 
}


