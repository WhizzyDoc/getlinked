var total_input = 0;
const patterns = {
  username: /^[a-z]{6,8}[\w-]{4,8}$/i,
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  tel: /^\d{11}$/,
};

function validate(field, regex) {
  if (regex.test(field)) {
    i.addClass("valid");
    i.removeClass("notValid");
  } else {
    if (field == "") {
      i.removeClass("notValid");
      i.removeClass("valid");
    } else {
      i.removeClass("valid");
      i.addClass("notValid");
    }
  }
}

$(".submit").on("click", function (e) {
  // console.log(pattern_counter);
  e.preventDefault();
  validate_final();
});
var i;
$(document).ready(function () {
  $(".input").on("input", function () {
    i = $(this).parent("fieldset").siblings(".condition");
    validate($(this).val(), patterns[$(this).attr("name")]);
  });
});

var check_box = document.querySelector("#checkbox");
var image = document.querySelector("#result");
function validate_final() {
  var params = document.querySelectorAll(".condition");
  var total_count = 4;
  var count = 0;
  for (var i = 0; i < params.length; i++) {
    if (params[i].classList.contains("valid")) {
      count += 1;
    }
  }

  var pattern =
    count == total_count &&
    image.getAttribute("src") != "" &&
    check_box.checked;
  if (pattern) {
    swal("Success!", "Your form has been submitted", "success");
    setTimeout(function () {
      location.reload();
    }, 2000);
  } else {
    swal("Oops!", "Invalid Entries", "error");
  }
}

$(".sub_container").hide();
$("#sub_container1").show();
$(".sub_container").first().addClass("first");
$(".prev").hide();
$(".next").on("click", function (e) {
  e.preventDefault();
  var active_tab = $(".sub_container.first");
  var next_tab = active_tab.next();
  if ($(next_tab).attr("id") !== undefined) {
    next_tab.siblings(".sub_container").removeClass("first");
    next_tab.addClass("first");
    var next_num = $(next_tab).attr("id");
    var next_id = "#" + next_num;
    $(".sub_container").hide();
    $(next_id).show(1000);
  }
  if ($(".prev").hide()) {
    $(".prev").show();
  }
});
$(".prev").on("click", function (e) {
  e.preventDefault();
  var active_tab = $(".sub_container.first");
  var prev_tab = active_tab.prev();
  if ($(prev_tab).attr("id") !== undefined) {
    prev_tab.siblings(".sub_container").removeClass("first");
    prev_tab.addClass("first");
    var prev_num = $(prev_tab).attr("id");
    var prev_id = "#" + prev_num;
    $(".sub_container").hide();
    $(prev_id).show(1000);
  }
});
