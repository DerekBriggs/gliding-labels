var removeInputError = function() {
  $(".input-container").removeClass("field-with-errors");
}

$(document).on('keydown focus', '#email', removeInputError);

var ajaxSubmitMailForm = function(form, emailAddress) {
  var params = {
    url: form.attr('action'),
    method: form.attr('method'),
    data: { email: emailAddress },
    success: function() {
      $('.thanks').addClass('show')
      $('input[type=submit]').addClass('hide')
    }
  }
  $.ajax(params);
}

$(document).on('submit', '#signupForm', function(e){
  e.preventDefault();
  var emailAddress = $('#email').val();
  if (emailAddress === "") {
    $(".input-container").addClass("field-with-errors");
  } else {
    removeInputError()
    ajaxSubmitMailForm($(this).closest('form'), emailAddress)
  }
});


