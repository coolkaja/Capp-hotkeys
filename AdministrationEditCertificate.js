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
      case 50: // 2 activates the "toevoegen" button
        document.getElementById('btnAddBottom').click();
        break;
      case 51: // 3 activates the "bladeren" button
        dxgvCertificateClauseSpecs.AddNewRow();
        break;
      default:
        console.log(charCode + '/' + charStr + ' is unbound.');
        break;
    }
  }
};
