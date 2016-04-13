var $password = $('#password');
var $confirmPassword = $('#confirm-password')
$('form span').hide()
function passwordIsCorrect(){
  return $password.val().length>8
}
function passwordIsConfirmed(){
  return $confirmPassword.val()===$password.val()
}

function canSubmit(){
  return passwordIsCorrect()&& passwordIsConfirmed()
}

function passwordEvent(){
  if(passwordIsCorrect()){
    $password.next().hide()
  }
  else{
    $password.next().show()
  }
}

function passwordConfirmEvent(){
  if(passwordIsConfirmed()){
    $confirmPassword.next().hide()
  }
  else {
    $confirmPassword.next().show()
  }
}
function enableSubmitEvent(){
  $('#submit').prop('disabled',!canSubmit())
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(passwordConfirmEvent).keyup(enableSubmitEvent);
$confirmPassword.focus(passwordConfirmEvent).keyup(passwordConfirmEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
