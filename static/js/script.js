$(document).ready(function () {
  $(".opennav").click(function () {
    $(".nav").addClass("open");
  });
  $(".closenav").click(function () {
    $(".nav").removeClass("open");
  });

  $(".contact-btn").click(function (e) {
    e.preventDefault();
    var name = $("#first_name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var pattern = name != "" && email != "" && message != "";
    if (!pattern) {
      swal("Oops!", "Invalid Entries", "error");
      return;
    } else {
      var contact_url = "https://backend.getlinked.ai/hackathon/contact-form";
      // var formData = new FormData();
      // formData.append("name", name);
      // formData.append("email", email);
      // formData.append("message", message);

      var formData = JSON.stringify({
        first_name: name,
        email: email,
        message: message,
        phone_number: "07026771744",
      });

      $(this).html("Submitting...");

      fetch(contact_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          swal("Success!", "Your form has been submitted", "success");
          $("#first_name").val("");
          $("#email").val("");
          $("#message").val("");
          $(".contact-btn").html("Submit");
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    }
  });
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
