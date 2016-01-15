$(document).ready(function() {
$(function(){
  $('button').click(function(){
    $('img').each(function(item){
      if (item>-1){
        $(this).hide();
      }
    });
  });
});

$(function(){
  $('button').click(function(){
    $('#img2').show();
  });
});

$(function(){
  $('button').click(function(){
    $('#img3').show();
  });
});

$(function(){
  $('button').click(function(){
    $('#img4').show();
  });
});

$(function(){
  $('button').click(function(){
    $('#formid1').show();
  });
});


// ==================================================================

$("form#formid1").submit(function(event) {

var age = parseInt($("input#age").val());
var alien = $("select#alien").val();

if (alien === "Gearhead" && alien !== "Birdperson" && alien !== "Zeke" && age>50 && musical !=='Schwifty') {
  $('#rick').show();
} else {
  $('#rick').hide();
}

if (alien !== "Gearhead" && alien === "Birdperson" && alien !== "Zeke" && age>50 && musical !=='Schwifty') {
  $('#morty').show();
} else {
  $('#morty').hide();
}

if (alien !== "Gearhead" && alien !== "Birdperson" && alien === "Zeke" && age>50 && musical !=='Schwifty') {
  $('#jerry').show();
} else {
  $('#jerry').hide();
}
if (age<=50 && age>= 31 && (musical !=='Schwifty')) {
  $('#beth').show();
} else {
  $('#beth').hide();
}
if (age>=1 && age<=30 && (musical !=='Schwifty')) {
  $('#summer').show();
} else {
  $('#summer').hide();
}
if (age>0 && musical ==='Schwifty') {
  $('#meseeks').show();
} else {
  $('#meseeks').hide();
}
event.preventDefault();
});
});
