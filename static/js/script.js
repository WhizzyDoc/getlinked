$(document).ready(function() {
    $('.opennav').click(function() {
        $('.nav').addClass('open');
    })
    $('.closenav').click(function() {
        $('.nav').removeClass('open');
    })
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}