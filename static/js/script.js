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
          $(".contact-btn").html("Submit").attr("disabled", false);
        })
        .catch((err) => {
          console.log("error: " + err);
          $(".contact-btn").html("Submit").attr("disabled", false);
          swal("Oops!", "Error occured while submitting form", "error");
        });
    }
  });

  // registration
  $("#register-btn").click(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var topic = $("#topic").val();
    var category = $("#category").val();
    var phone = $("#phone").val();
    var group_size = $("#group_size").val();
    var agree = $("#agree");

    var pattern =
      name != "" &&
      email != "" &&
      topic != "" &&
      // category != "" &&
      phone != "" &&
      group_size != "";
    //agree.is(":checked");
    if (!pattern) {
      swal("Oops!", "Invalid Entries", "error");
      return;
    } else {
      var contact_url = "https://backend.getlinked.ai/hackathon/registration";
      // var formData = new FormData();
      // formData.append("name", name);
      // formData.append("email", email);
      // formData.append("message", message);

      var formData = JSON.stringify({
        team_name: name,
        email: email,
        group_size: parseInt(group_size),
        phone_number: toString(phone),
        project_topic: topic,
        category: parseInt(category),
        privacy_policy_accepted: true,
      });

      $(this).html("Submitting...").attr("disabled", true);

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
          $(".register-btn").html("Register Now").attr("disabled", false);
        })
        .catch((err) => {
          console.log("error: " + err);
          $(".register-btn").html("Register Now").attr("disabled", false);
          swal("Oops!", "Error occured while submitting form", "error");
        });
    }
  });

  var cat_url = "https://backend.getlinked.ai/hackathon/categories-list";
  fetch(cat_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (var i in data) {
        var temp = `<option value="${data[i].id}">${data[i].name}</option>`;
        $("#category").append(temp);
      }
    })
    .catch((error) => {
      console.log("error: " + error);
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
