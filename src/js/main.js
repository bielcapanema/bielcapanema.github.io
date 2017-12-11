(function () {
  var doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');
  
}());

$(document).scroll(function() {
  navbarScroll();
});

function navbarScroll() {
  var y = window.scrollY;
  if (y > 10) {
    $('.header').addClass('small');
  } else if (y < 10) {
    $('.header').removeClass('small');
  }
}

var $form = $("form"),
$successMsg = $(".alert");
$.validator.addMethod("letters", function(value, element) {
return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
});
$form.validate({
rules: {
  name: {
    required: true,
    minlength: 3,
    letters: true
  },
  email: {
    required: true,
    email: true
  }
},
messages: {
  name: "Please specify your name (only letters and spaces are allowed)",
  email: "Please specify a valid email address"
},
submitHandler: function() {
  $successMsg.show();
}
});
