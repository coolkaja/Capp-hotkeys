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
      case 33: // ! opens "Evaluaties" tab
        document.getElementById('dxtcDetailTabs_T11T').click();
        break;
      case 35: // # opens "Kenmerken" tab
        document.getElementById('dxtcDetailTabs_T13T').click();
        break;
      case 36: // $ opens "Materiaal" tab
        document.getElementById('dxtcDetailTabs_T14T').click();
        break;
      case 49: // 1 opens "planning" tab
        document.getElementById('dxtcDetailTabs_T0T').click();
        break;
      case 50: // 2 opens "Voorkennis" tab
        document.getElementById('dxtcDetailTabs_T1T').click();
        break;
      case 51: // 3 opens "Activiteiten" tab
        document.getElementById('dxtcDetailTabs_T2T').click();
        break;
      case 52: // 4 opens "Communicatie" tab
        document.getElementById('dxtcDetailTabs_T3T').click();
        break;
      case 53: // 5 opens "Financieel" tab
        document.getElementById('dxtcDetailTabs_T4T').click();
        break;
      case 54: // 6 opens "Doelgroepen" tab
        document.getElementById('dxtcDetailTabs_T5T').click();
        break;
      case 55: // 7 opens "Vakgebieden" tab
        document.getElementById('dxtcDetailTabs_T6T').click();
        break;
      case 56: // 8 opens "Gedifferentieerd aanbod" tab
        document.getElementById('dxtcDetailTabs_T7T').click();
        break;
      case 57: // 9 opens "Punten" tab
        document.getElementById('dxtcDetailTabs_T9T').click();
        break;
      case 48: // 0 opens "Beoordelingen" tab
        document.getElementById('dxtcDetailTabs_T10T').click();
        break;
      case 64: // @ opens "Evaluaties" tab
        document.getElementById('dxtcDetailTabs_T12T').click();
        break;
      case 98: // b opens "bewerken" on the description tab
        document.getElementById('btnEditDescription').click();
        break;
      case 115: // s opens "opslaan" on the description tab
        document.getElementById('btnSaveDescriptionBottom').click();
        break;
      case 116: // t opens "terug" 
        if (document.getElementById('ContentPlaceHolder_ucBack_ButtonBack') == null){
          document.getElementById('ContentPlaceHolder_ucEditModeBackButton_ButtonBack').click();
        }
        document.getElementById('ContentPlaceHolder_ucBack_ButtonBack').click();
        break;
      default:
        console.log(charCode + '/' + charStr + ' is unbound.');
        break;
    }
  }
};
