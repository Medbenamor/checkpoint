
	function bold(){
    var element =document.getElementById("text");
        element.classList.toggle("bold");


}

function italic(){
    var element =document.getElementById("text");
        element.classList.toggle("italic");
}

function underlined (){
	var element =document.getElementById("text");
		element.classList.toggle("underlined") ;
}

function frontfamily(){
	var index = document.getElementById("ft").selectedIndex;
	var x = document.getElementById("ft").options[index].text;

	document.getElementById("text").style.fontFamily = x; 

	
}

function frontSize(){
	var x = document.getElementById("nb").value;
	

	document.getElementById("text").style.fontSize = x; 
}









