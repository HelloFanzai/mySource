const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


document.addEventListener('keyup',function (theE) {
  if (theE.key==' ') {
    return newTodo()
  }
  
})



function newTodo() {
  document.getElementById('theUserInput').value = ''
  document.getElementById('theMainInput').style.display = 'block'
  document.getElementById('theUserInput').focus()
  theCount()

  let the1snInput = document.getElementById('theMainInput')
  the1snInput.onkeydown = function(theE){
    if (theE.key == 'Enter') {
      return theEnter()
    }
  }





  // the1snInput.addEventListener('keyup', function (theE) {

  //   if (theE.key=='Enter') {
  //     return theEnter()
  //   }

  // })

}

// document.getElementById('item-count').innerHTML = document.getElementById('todo-list').children.length - 1






function theEnter() {


  let theUserInput = document.getElementById('theUserInput').value



  let tempLi = document.createElement("li");
  let tempCheckBox = document.createElement("input");
  let tempInput = document.createElement("input");
  let tempEdit = document.createElement("button");
  let tempDel = document.createElement("button");
  let oUl = document.getElementsByTagName("ul")[0];

  tempEdit.innerHTML = "Edit";
  tempDel.innerHTML = "Delete";
  tempEdit.name = "Edit";
  tempDel.name = "delete";
  tempCheckBox.name = 'theCheckbox'
  tempCheckBox.type = 'checkBox'
  tempInput.value = theUserInput
  tempInput.disabled = true



  tempLi.setAttribute('class', 'todo-list-li')
  tempLi.appendChild(tempCheckBox)
  tempLi.appendChild(tempInput);
  tempLi.appendChild(tempEdit);
  tempLi.appendChild(tempDel);

  if (theUserInput.trim() == '' && !confirm('Empty OK?')) {
    return document.getElementById("theUserInput").focus()
  }

  oUl.appendChild(tempLi);
  document.getElementById('theMainInput').style.display = 'none'

  theCount()
}

function theTest22(theE) {
  let theDis = document.getElementById('theInputTest')
  if (theDis.disabled) {
    // console.log('if');
    theDis.disabled = false
    document.getElementById("theInputTest").focus()
  } else {
    // console.log('else');
    theDis.disabled = true
    // document.getElementById("theInputTest").focus()

  }
}


var oUl = document.getElementsByTagName("ul")[0];
oUl.onclick = function (event) {
  // console.log(oUl);
  var event = event
  var target = event.target;
  if (event.target.name == "delete") {
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
  if (event.target.name == "Edit") {
     let theTep = event.target.parentNode.children[1]
    if (theTep.disabled) {
      // console.log('if');
      theTep.disabled = false
      theTep.focus()
    } else {
      // console.log('else');
      theTep.disabled = true
      // document.getElementById("theInputTest").focus()
  
    }
  }
  theCount()
};

function theCount() {
  document.getElementById('item-count').innerHTML = document.getElementById('todo-list').children.length - 1
  let theCheckbox = document.getElementsByName('theCheckbox')
  let theChecked = 0


  theCheckbox.forEach(e => {
    !e.checked || theChecked++
  })
  document.getElementById('unchecked-count').innerHTML = theCheckbox.length - theChecked
}


let the1svDiv = document.createElement("div")
let the1svInput = document.createElement("input")
let the1svBtn = document.createElement("button")

the1svDiv.id='theMainInput'
the1svDiv.class='theMainInput'
the1svInput.id='theUserInput'
the1svInput.placeholder='Adding new'
the1svInput.name='input'
the1svBtn.innerHTML='Enter'
the1svBtn.onclick=function() {
  theEnter()
}


the1svDiv.appendChild(the1svInput)
the1svDiv.appendChild(the1svBtn)
document.getElementsByTagName("ul")[0].appendChild(the1svDiv)


{/* <div id="theMainInput" class="theMainInput">
<input id="theUserInput" type="text" placeholder="Adding new" name="input">
<button onclick="theEnter()">Enter</button>
</div> */}




