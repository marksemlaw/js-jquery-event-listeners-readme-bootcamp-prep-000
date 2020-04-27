function getIt(){
  $('p').on("click", function(){
  return alert("Hey!")})
}

function frameIt(){
  $('img').on("load", function(){
  output = $('img').addClass(tasty)
  return output
  })
}

function pressIt(){
  $('form').on("keydown", function(){
   if ($("input:first").val() === 71) {
    alert('you have pressed g')}
    })}

function submitIt(){
  $('p').on("click", function(){
  return alert("Hey!")})
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
