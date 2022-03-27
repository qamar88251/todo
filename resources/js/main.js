
// create list when click on add btn
function newElement() {
 	var inputValue = document.getElementById("myInput").value;
  	var li = document.createElement("li");
		 let checkbox = document.createElement('input')         //line 10
	 checkbox.type = ('checkbox' );          //line 11
	
	 checkbox.className = "chkboxcustomize";
       checkbox.setAttribute('id','check')         //line 12
	      let label = document.createElement('label')
          
                       //line 14
        li.appendChild(checkbox)
       
        li.appendChild(label)
	
  var string = inputValue.trim(" ");
  if (string ==='' || inputValue === null)  {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
	
	
	
	//to clear input field
  document.getElementById("myInput").value = "";
	

	
	// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('check');
list.addEventListener('click', function(ev) {
	if(ev.target.checked){
		li.style.textDecoration = "line-through";
	}else{
		li.style.textDecoration = "none";
	}

},false);

	
	//displaying close btnn
  var btn11 = document.getElementById("myBtn11");
  btn11.className = "close";
  li.appendChild(btn11);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
					  
		  if (confirm("Selected Todo is Going to be Deleted!!!")) {
			    var div = this.parentElement;
      			div.style.display = "none";
		  } else {
			 var div = this.parentElement;
		  }
		

  
    };	
  }
}




// to delete list items
	
var close = document.getElementsByClassName("close");

  onclick = function() {
	  
    var div = this.parentElement;
    div.style.display = "none";
  }


//hit enter
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});




  
