function getIt(){
  $('p').on("click", function(){
  return alert("Hey!")})
}

function frameIt(){
  $('img').on("load", function(){
  $('img').tasty
  })
}

function pressIt(){
  $('form').on("keydown", function(){
   if ($("input:first").val() === 71) {
    alert('you have pressed g')}
    })}

function submitIt(){
  $('form').on("submit", function(){
  return alert("Your form is going to be submitted now.")})
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
