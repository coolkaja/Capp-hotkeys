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
      case 49: // 1 activates the "toevoegen" button.
        document.getElementById('addButtonTopgrdExternalCertificateCodeViewDecorator').click();
        break;
        case 50: // 2 activates the "opslaan" button.
        document.getElementsByClassName("dxgvCommandColumnItem_Office2010Blue dxgv__cci")[0].click()
        break;
      default:
        console.log(charCode + '/' + charStr + ' is unbound.');
        break;
    }
  }
};
