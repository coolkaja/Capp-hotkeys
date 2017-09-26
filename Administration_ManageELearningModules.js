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
      case 49: // 1 activates the "toevoegen" button
        document.getElementById('btnAddTop').click();
        break;
      case 98: // b activates the "bladeren" button
        document.getElementById('grdEntities_DXPEForm_efnew_ulcModuleFile_TextBox0_FakeInput').click();
        break;
      case 115: // s activates the "opslaan" button
        document.getElementById('grdEntities_DXPEForm_efnew_btnUploadAndSave').click();
        break;
      case 27: // esc activates the "exit" button
        if ( document.getElementById('grdEntities_DXPEForm_HCB-1') == null){
           aspxGVScheduleCommand('grdEntities',['UpdateEdit'],0);
        }else{
          document.getElementById('grdEntities_DXPEForm_HCB-1').click();
        }
        break;
      default:
        console.log(charCode + '/' + charStr + ' is unbound.');
        break;
    }
  }
};
