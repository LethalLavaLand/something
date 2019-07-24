function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
 document.getElementById("saves").style.display = "none";
 document.getElementById("mainTab").click();
 var stuff;
 var multi;
 var coolerStuff;
 var bar1=false;
 var saveFile;
 function beginning(){
	stuff = 0;
	multi = 1;
	coolerStuff = 0;
	resetBars();
	document.getElementById("mainTab").click();
  }
  memes = localStorage.getItem("cool");
if (localStorage.getItem("cool") === null){
beginning();
alert("start");
}
else {
  loadGame((memes.split(',')));
}
   function resetGame() {
   if (confirm('Are you sure you want to reset all progress?')) {
     beginning();
   }
 }

  function loadGame(saveInput){
   x = saveInput
   stuff = parseFloat(x[0]) || 0;
   multi = parseFloat(x[1]) || 1;
   coolerStuff = parseFloat(x[2]) || 0;   
}
  function copySave(){
    prompt("Save Data:",saveFile)
    
  }
  function importSave(){
    try {
      importing = prompt("Put Save Data: ")
	if(importing==null||importing=="")
		  alert("nothing");
	  else{
      importing = atob(importing)
      loadGame(importing.split(','))
	  }
    }
    catch(err){
       document.getElementById("mainTab").click();
    }
  }
  
  function resetBars(){
	document.getElementById("bar").style.width= 0 + '%';
	bar1=false;
  }
  
 //////////////////////////////////////////////////////////
  
   function gain(number){
	stuff=stuff+number; 
 }
   function coolerGain(number){
	coolerStuff=coolerStuff+number; 
 }
 
 function bar() {
	 if(bar1==false){
		 bar1=true;
  var elem = document.getElementById("bar");   
  var width = 0;
  if(stuff>=10000){
	  elem.style.width = 100 + '%';
	  coolerStuff++;
	  bar1=false
  }
  else{
	    var id = setInterval(frame, 10);
  }
  function frame() {
    if (width >= 100) {
		coolerStuff++;
		bar1=false
		elem.style.width = 0 + '%'; 
      clearInterval(id);
    } else if(bar1==true){
      width=width+(stuff/100); 
	  if(width>100){
		  width=100
	  }
      elem.style.width = width + '%'; 
	}
		else{
		clearInterval(id);
	}
	}
    }
  }
 
 //////////////////////////////////////////////////////////
 
  setInterval(function(){
	    localStorage.setItem("cool",[stuff, multi, coolerStuff].toString());
		saveFile = btoa(localStorage.getItem("cool"))
		stuff=stuff+(coolerStuff/100);
		bar();
		document.getElementById("stuffNumber").innerHTML = Math.round(stuff);
		document.getElementById("coolerStuffNumber").innerHTML = Math.round(coolerStuff);
  }, 50);