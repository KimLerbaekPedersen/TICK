var emailVar = document.getElementsByClassName("news4");
var lnVar = document.getElementById("lname");
//Get the button
var mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// SLIDESHOW START
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000);
// SLIDESHOW END

/* ======VALIDATE START====== */
function validateContact(){
  if(emailVar.value == ""){
    alert("please fill out first name");
    return false;
  }
  else if(lnVar.value == ""){
    alert("please fill out last name");
    return false;
  }
}
/* ======VALIDATE END===== */


