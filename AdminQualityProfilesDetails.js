statusImage = document.getElementById("statusImage");
statusImage.src = "https://i.imgur.com/CCjMY9U.png";

var runScript = true;
document.onkeypress = function (evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  //console.log(charCode);
  if (charCode == 19) { //if pause|break is pressed
    if (runScript){
      runScript = false;
      statusImage.src = "https://i.imgur.com/M9LM3d5.png";
    }else{
      runScript = true;
      statusImage.src = "https://i.imgur.com/CCjMY9U.png";
    }
    console.log('Script status: ' + runScript);
  }
  if (runScript) {
    switch (charCode) {
      case 49: // 1 activates the search button
        document.getElementById('ContentPlaceHolder_ucSearchBox_btnSearch').click();
        break;
      case 50: // 2 activates the more search options button
        document.getElementById('ContentPlaceHolder_ucSearchBox_pnlMoreSearchOptions').click();
        break;
      case 51: // 3 adds a new sjabloon
        document.getElementById('btnAddTop').click();
        break;
      default:
        console.log(charCode + '/' + charStr + ' is unbound.');
        break;
    }
  }
};
