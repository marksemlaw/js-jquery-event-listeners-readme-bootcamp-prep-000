function getIt(){
  $('p').on("click", function(){
  return alert("Hey!")})
}

function frameIt(){
  $('img').on("click", )
}

function pressIt(){
  $('p').on("keydown", alert("Hey!"))
}

function submitIt(){
  $('p').on("click", alert("Hey!"))
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
