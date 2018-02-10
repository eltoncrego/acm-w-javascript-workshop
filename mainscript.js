var newContact = {
  firstName: "Contact",
  lastName: "Name",
  emailAddress: "test@test.test",
  message: "Hello, I like you!",
  updates: true,
  services: false,
}

var validateInputForm = function(){
  var form = document.forms["input"];
  if(form.firstname.value == ""){
    alert("Please enter your first name")
    return false;
  }
  if(form.lastname.value == ""){
    alert("Please enter your last name")
    return false;
  }
  if(form.email.value == ""){
    alert("Please enter your email address")
    return false;
  }
  return true;
}

var validateOptionsForm = function(){
  form = document.forms["options"];
  if(form.msg.value == ""){
    alert("Are you sure you want a blank message?")
    return false;
  } else {
    return true;
  }
}

var fillContactInformation = function(){
  var form = document.forms["input"];
  newContact.firstName = form.firstname.value;
  newContact.lastName = form.lastname.value;
  newContact.emailAddress = form.email.value;

  form = document.forms["options"];
  newContact.message = form.msg.value;
  newContact.updates = form.notify_u.checked;
  newContact.services = form.notify_s.checked;
}

var boolToWords = function(bool){
  return bool ? "would like to be" : "would rather not be";
}

var submitForm = function(){
  if(validateInputForm()){
    fillContactInformation();
    alert(newContact.firstName
      + " " + newContact.lastName
      + " said\n"
      + "---------------------------------------------\n"
      + newContact.message
      + "\n---------------------------------------------"
      + "\nfrom email address: "
      + newContact.emailAddress
      + "\nthey " + boolToWords(newContact.updates) + " contacted when the website updates."
      + "\nthey " + boolToWords(newContact.services) + " contacted with related stuff."
    );
  }
}
