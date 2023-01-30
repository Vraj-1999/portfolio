// Name     : Vraj Vipinbhai Patel
// Student# : 127723211
// Email    : vvpatel17@myseneca.ca 

window.onload = function() {
  let form = document.querySelector('#contact-me-form');

  form.onsubmit = function(event) {
    if(!form.checkValidity()) {
      form.classList.add('was-validated');
      
      event.preventDefault();
      return false;
    }
    return true;
  }
}

function display(){
  if (document.getElementById("hourly-rate-form").classList.contains("hide"))
  document.getElementById("hourly-rate-form").classList.remove("hide");
  if(document.getElementById("feedback-hourly-rate").required == false)
  document.getElementById("feedback-hourly-rate").required = true;
}

function nodisplay(){
  if (!document.getElementById("hourly-rate-form").classList.contains("hide"))
  document.getElementById("hourly-rate-form").classList.add("hide");
  if(document.getElementById("feedback-hourly-rate").required == true)
  document.getElementById("feedback-hourly-rate").required = false;
  document.getElementById("feedback-hourly-rate").value = "";
}
