/*
 * Add your JS in this file.
 */

var dismissButton = document.getElementsByClassName('dismiss-button');
for(var i = 0; i < dismissButton.length; i++){
   dismissButton[i].addEventListener('click', handleDismissButtonClick);
}

var addButton = document.getElementsByClassName('add-note-button-container');
for(var j = 0; j < addButton.length; j++){
   addButton[j].addEventListener('click', addButtonClick);
}

var modalClose = document.getElementsByClassName('modal-close-button');
for(var i = 0; i < modalClose.length; i++){
   modalClose[i].addEventListener('click', modalCloseClick);
}

var modalCancel = document.getElementsByClassName('modal-cancel-button');
for(var i = 0; i < modalCancel.length; i++){
   modalCancel[i].addEventListener('click', modalCloseClick);
}

var modalAccept = document.getElementsByClassName('modal-accept-button');
for(var i = 0; i < modalAccept.length; i++){
   modalAccept[i].addEventListener('click', modalAcceptClick);
}

function handleDismissButtonClick(event){
   var toDoNote = event.target.parentElement;
   console.log(toDoNote);
   toDoNote.remove();
}

function addButtonClick(event){
   var hidden = document.getElementsByClassName('hidden');
   for(var h = 0; h < hidden.length; h++){
      hidden[h].style.display = "block";
   }
}

function modalCloseClick(event){
   var hidden = document.getElementsByClassName('hidden');
   for(var h = 0; h < hidden.length; h++){
      hidden[h].style.display = "none";
   }
   document.getElementById('todo-input-what').value = "";
   document.getElementById('todo-input-where').value = "";
   document.getElementById('todo-input-when').value = "";
   document.getElementById('todo-input-who').value = "";
   document.getElementById('todo-input-details').value = "";
}

function makeNote(modal){
   var newNote = document.createElement('section');
   var header = document.createElement('h2');
   var dismissNote = document.createElement('div');
   dismissNote.innerHTML = "&times;";
   newNote.className = 'todo';
   dismissNote.className = 'dismiss-button';

   header.textContent = document.getElementById('todo-input-what').value;
   var body = fillNote(modal);
   newNote.appendChild(header);
   newNote.appendChild(body);
   newNote.appendChild(dismissNote);
   console.log(newNote);
   return newNote;
}

function fillNote(modal){
   var note = document.createElement('div');
   note.className = 'todo-body';
   var elements = document.getElementsByClassName('todo-input-element');

   for(var i = 0; i < elements.length; i++){
      var inputs = elements[i].getElementsByTagName('input');
      for(var j = 0; j < inputs.length; j++){
	 var data = inputs[j].value;
	 console.log(data);
	 console.log(inputs[j].id);
	 if(inputs[j].id == 'todo-input-where' && data != ""){
	    var para = document.createElement('p');
	    para.className = 'indent-wrapped';
	    var label = document.createElement('span');
	    label.className = 'where';
	    label.textContent = "where: ";
	    console.log(label);
	    var t = document.createTextNode(data);
	    para.appendChild(t);
	    para.insertBefore(label, para.childNodes[0]);
	    note.appendChild(para);
	 }
	 if(inputs[j].id == 'todo-input-when' && data != ""){
	    var para = document.createElement('p');
	    para.className = 'indent-wrapped';
	    var label = document.createElement('span');
	    label.className = 'when';
	    label.textContent = "when: ";
	    console.log(label);
	    var t = document.createTextNode(data);
	    para.appendChild(t);
	    para.insertBefore(label, para.childNodes[0]);
	    note.appendChild(para);
	 }
	 if(inputs[j].id == 'todo-input-who' && data != ""){
	    var para = document.createElement('p');
	    para.className = 'indent-wrapped';
	    var label = document.createElement('span');
	    label.className = 'who';
	    label.textContent = "who: ";
	    console.log(label);
	    var t = document.createTextNode(data);
	    para.appendChild(t);
	    para.insertBefore(label, para.childNodes[0]);
	    note.appendChild(para);
	 }
      }
   }
   var d = document.getElementById('todo-input-details');
   console.log(d.value);
   if(d.value != ""){
      var para = document.createElement('p');
      var t = document.createTextNode(d.value);
      para.appendChild(t);
      note.appendChild(para);
   }
   return note;
}

function modalAcceptClick(event){
   var modal = document.getElementsByClassName('modal-body');
   var required = document.getElementById('todo-input-what');
   if(required.value != ""){
      var newNote = makeNote(modal[0]);
      document.getElementsByTagName('main')[0].appendChild(newNote);
   }
   modalCloseClick();
}
