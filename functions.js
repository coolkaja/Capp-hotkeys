//a bunch of functions used by the scripts

//checks if function is called inside an iframe
//returns true if it's in an iframe, and false if it isn't
function inIframe () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

//adds a status image to the current page
//returns the object if it succefully created it, returns false if it didn't
function addStatusIcon(){
	if (!inIframe()){
		var statusImageLink = document.createElement("a")
		statusImageLink.href = "https://github.com/coolkaja/Capp-hotkeys/blob/master/README.md#" + getPageName().toLowerCase();
		statusImageLink.target = "_blank";
		document.getElementsByTagName("body").item(0).appendChild(statusImageLink);

		var statusImage = document.createElement("img");
		statusImage.src = "https://i.imgur.com/SimKpiX.png";
		statusImage.style.position = "fixed";
		statusImage.style.left = "4px";
		statusImage.style.bottom = "4px";
		statusImage.setAttribute("id", "statusImage");
		statusImageLink.appendChild(statusImage);
		return statusImageLink;
	}
	else {
		return false;
	}
}

//get the name of the page
//returns the name of the current page according to the naming scheme of capp
function getPageName(){
  adress = window.location.href;
  adress = adress.split(".");
  if (adress[0] == "https://staging"){
    adress = adress[2];
    adressarr = adress.split("/");
    adressarr.splice(0, 0);
  }
  else{
    adress = adress[2];
    adress.split("/");
    adressarr = adress;
  }
  
  
  
  n = "";
  for(i = 2; i < adressarr.length; i++){
	  if (/^[a-zA-Z]+$/.test(adressarr[i])){
		  n += adressarr[i];
	  }
  }
  return n;
}

//loads script from git
//returns the script element it creates
function addGitScript(name){
  var imported = document.createElement('script');
  imported.src = 'https://rawgit.com/coolkaja/Capp-hotkeys/master/' + name + '.js';
  document.head.appendChild(imported);
  return imported;
}

//add a hotkey script from git
//returns true if it added it succefully and false if it's called in an iframe
function addHotkeys(){
  //exit if the script runs in an iframe.
  if (inIframe()){
    return false;
  }
  //get page name and run the script for that page.
  addGitScript(getPageName());
  return true;
}

