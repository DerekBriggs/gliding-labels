var checkForValue = function() {
  if ($('[type="email"]').val().length > 0) {
    $(this).siblings().addClass("show-input-label");
  } else {
    $(this).siblings().removeClass("show-input-label");
  }
}

$(document).on('blur', '[type="email"]', checkForValue);

