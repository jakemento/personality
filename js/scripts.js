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

$(function(){
  $('btn2').click(function(){
    $('.btn2').hide();
  });
});



$("form#formid1").submit(function(event) {

var age = parseInt($("input#age").val());
var food = $("select#food").val();
var weather = $("select#weather").val();
var lodgings = $("select#lodgings").val();
var activities = $("select#activities").val();

if (food === "poi" && weather === "hot" && lodgings === "resort" && activities === "snorkel" && age<=20) {
  $('#Hawaii').show();
} else {
  $('#Hawaii').hide();
}

if (food === "poi" && weather === "warm") {
  $('#Hawaii').show();
} else {
  $('#Hawaii').hide();
}

if (food === "paella" && weather === "warm" && lodgings === "gothic" && activities === "cathedral" && age<=40) {
  $('#Barcelona').show();
} else {
  $('#Barcelona').hide();
}

if (food === "paella" && weather === "warm" && age>=0) {
  $('#Barcelona').show();
} else {
  $('#Barcelona').hide();
}

if (food === "paella" && activities === "gothic") {
  $('#Barcelona').show();
} else {
  $('#Barcelona').hide();
}



if (food === "paella" && weather === "warm" && lodgings === "gothic") {
  $('#Barcelona').show();
} else {
  $('#Barcelona').hide();
}

if (food === "fondue" && weather === "cold") {
  $('#Switzerland').show();
} else {
  $('#Switzerland').hide();
}

if (food === "poi" && weather === "warm") {
  $('#Hawaii').show();
} else {
  $('#Hawaii').hide();
}
//
// if (alien !== "Gearhead" && alien !== "Birdperson" && alien === "Zeke" && age>50 && musical !=='Schwifty') {
//   $('#jerry').show();
// } else {
//   $('#jerry').hide();
// }
// if (age<=50 && age>= 31 && (musical !=='Schwifty')) {
//   $('#beth').show();
// } else {
//   $('#beth').hide();
// }
// if (age>=1 && age<=30 && (musical !=='Schwifty')) {
//   $('#summer').show();
// } else {
//   $('#summer').hide();
// }
// if (age>0 && musical ==='Schwifty') {
//   $('#meseeks').show();
// } else {
//   $('#meseeks').hide();
// }



event.preventDefault();
});
});
