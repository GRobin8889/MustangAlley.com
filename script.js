'use strict';

///////// "See Our Other Location Hours" Button Modal Functionality ////////////
// Get the location Modal
var modal = document.getElementById("location-modal");

// Get the button that will open the location modal
var btn = document.getElementById("cta-locations")

// Get the <span> element that will close the location Modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the location modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the location modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

///////// Automatically Highlight Day of the Week in 'find-dealer-section' ////////////
