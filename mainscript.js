var newContact = {
  // firstName: "Contact",
  // lastName: "Name",
  // emailAddress: "test@test.testy",
  // messageBody: "'Hello there' - Obi Wan Kenobi",
  // optionUpdates: true,
  // optionServices: false,
}

// submitForm -> name -> function() {}
var submitForm = function(){
  // User checking -> make sure user isn't stupid
  // Check if the message is full
    // Assign each field to an object
  if (userCheck()){
    messageCheck();
    createNewContact();
    alert(
      newContact.firstName
      + " "
      + newContact.lastName
      + "'s Message\n"
      + "-----------------------------"
      + "\n" + newContact.messageBody + "\n"
      + "-----------------------------"
      + "\nFrom Address: " + newContact.emailAddress
    );
    window.open(
      "mailto:"
      + newContact.emailAddress
      + "?subject="
      + "Responding to "
      + newContact.firstName
      + " "
      + newContact.lastName
      + "'s Message"
    );
      // "mailto:"
      // + newContact.emailAddress
      // +"?subject="
      // +"Responding to "
      // +newContact.firstName
      // +" "
      // +newContact.lastName
      // + "'s Message"
  }

  // Actually submit
}

// document -> parent html doc that called this file: index.html
var userCheck = function(){
  var form = document.forms["input"];
  if(form.firstname.value == ""){
    alert("Hey! Please bleh enter your FIRST pony name.");
    return false;
  } else if(form.lastname.value == ""){
    alert("Hey! Please waowowawow enter your LAST zaam name.");
    return false;
  } else if(form.email.value == ""){
    alert("Hey! Please enter a valid EEEMALE ADDI.");
    return false;
  }
  else return true;
}

var messageCheck = function(){
  var form = document.forms["options"];
  if (form.msg.value == ""){
    newContact.messageBody = prompt("Please enter your message here.");
  } else {
    newContact.messageBody = form.msg.value;
  }
}

var createNewContact = function(){
  var form = document.forms["input"];
  newContact.firstName = form.firstname.value;
  newContact.lastName = form.lastname.value;
  newContact.emailAddress = form.email.value;

  form = document.forms["options"];
  newContact.optionUpdates = form.notify_u.checked;
  newContact.optionServices = form.notify_s.checked;
}
