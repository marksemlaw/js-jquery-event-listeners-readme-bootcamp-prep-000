function getIt(){
  $('p').on("click", function(){
  return alert("Hey!")})
}

function frameIt(){
  $('img').on("load", function(){
  $('img').addClass("tasty")
  })
}

function pressIt(){
  $('form').on("keydown", function(){
   if($("input:first").val() == "G") {
    alert('you have pressed G')
   }
    })}

function submitIt(){
  $('form').on("submit", function(){
  alert("Your form is going to be submitted now.")})
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
