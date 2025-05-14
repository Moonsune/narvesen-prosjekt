  function validateForm(){
    
    
    
      let fnam = document.forms["myForm"]['fNam'];
      let lnam = document.forms["myForm"]['lNam'];
      let age = document.forms["myForm"]['Age'];
      let address = document.forms["myForm"]['Address'];
      let postnr = document.forms["myForm"]['Postnr'];
      let poststd = document.forms["myForm"]['Poststd'];
      let tlf = document.forms["myForm"]['Tlf'];
    
      let errorFunnet = false;
      let errorOutput = "";
    
      function gyldigTlf(tlf) {
        var re = /^(\+\d{2}[- ]?)?\d{8}$/;
        return re.test(tlf);
      }
    
      function gyldigNam(name) {
        var re = /^[a-å ,.'-]+$/i;
        return re.test(name);
      }
    
      if (fnam.value == "") {
        errorSjekk("Fornavn må fylles ut");
      } else if (!gyldigNam(fnam.value)){
        errorSjekk("Fornavn må bestå av bokstaver");
      }
    
      if (lnam.value == "") {
        errorSjekk("Etternavn må fylles ut");
      } else if (!gyldigNam(lnam.value)){
        errorSjekk("Etternavn må bestå av bokstaver");
      }
    
      if (age.value == "") {
        errorSjekk("Alder må fylles ut, og være mellom 18-200");
      } else if (age.value > 200 || age.value < 18) {
        errorSjekk("Alder må være 18 - 200 år");
      }
    
    
      if (postnr.value == "" ) {
        errorSjekk("Postnummer må fylles ut");
      }

      if (poststd.value == "" ) {
        errorSjekk("Poststed må fylles ut");
      }

      if (address.value == "" ) {
        errorSjekk("Adresse må fylles ut");
      }
    
      if (tlf.value == "") {
        errorSjekk("Mobilnummer må fylles ut");
        } else if (!gyldigTlf(tlf.value)) {
        errorSjekk("Mobilnummer må være i format (+xx xx xx xx xx)");
      }
      
    
      errorFunnet ? window.alert(errorOutput) : window.alert("Skjema ble sendt inn");
      function errorSjekk(text) {
        errorFunnet = true;
        errorOutput+=text+"\n";
      }
      
    }

    
