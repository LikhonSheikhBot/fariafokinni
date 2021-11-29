function copyField(field) {
    /* Get the text field */
    var copyText = document.getElementById(field);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    // alert("Copied " + copyText.value);
    copied('')
  } 

  function copied(field) {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied to clipboard";
  }