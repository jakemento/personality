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
    $('h2').show();
  });
});

$(function(){
  $('button').click(function(){
    $('h3').show();
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
  $('button').click(function(){
    $('#formid1').show();
  });
});

$(function(){
  $('.btn2').click(function(){
    $('.btn2').hide();
  });
});


$("form#formid1").submit(function(event) {

var age = parseInt($("input#age").val());
var food = $("select#food").val();
var weather = $("select#weather").val();
var lodgings = $("select#lodgings").val();
var activities = $("select#activities").val();

if (food === "poi" && weather === "hot" && lodgings === "resort" && activities === "snorkel" && age<=100) {
  $('#Hawaii').show();
  $('.img2').hide();
  $('.img4').hide();
}

if (food === "poi" && weather === "warm") {
  $('#Hawaii').show();
  $('.img2').hide();
  $('.img4').hide();
} else {
  $('#Hawaii').hide();
}

if (food === "paella" && weather === "warm" && lodgings === "gothic" && activities === "cathedral" && age<=40) {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}

if (food === "paella" && weather === "warm" && age>=0) {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}

if (food === "paella" && lodgings === "gothic") {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}

if (food === "paella" && activities === "cathedral") {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}



if (food === "paella" && weather === "warm") {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}

if (food === "fondue" && weather === "cold") {
  $('#Switzerland').show();
  $('.img3').hide();
  $('.img4').hide();
} else {
  $('#Switzerland').hide();
}

if (food === "poi" && weather === "warm") {
  $('#Hawaii').show();
  $('.img2').hide();
  $('.img4').hide();
} else {
  $('#Hawaii').hide();
}


if (activities === "skiing" && weather === "cold") {
  $('#Switzerland').show();
  $('.img3').hide();
  $('.img4').hide();
}

if (lodgings === "ice" && weather === "cold") {
  $('#Switzerland').show();
  $('.img3').hide();
  $('.img4').hide();
}

if (lodgings === "ice" && weather === "warm") {
  $('#Switzerland').show();
  $('.img3').hide();
  $('.img4').hide();
}

if (food === "poi" && weather === "hot") {
  $('#Hawaii').show();
  $('.img2').hide();
  $('.img4').hide();
}

if (weather === "hot" && lodgings === "resort") {
  $('#Hawaii').show();
  $('.img2').hide();
  $('.img4').hide();
}

if (age <=100 && weather === "warm" && food === "paella") {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}

if (lodgings === "ice" && activities === "skiing") {
  $('#Switzerland').show();
  $('.img3').hide();
  $('.img4').hide();
}

if (lodgings === "gothic" && activities === "cathedral") {
  $('#Barcelona').show();
  $('.img2').hide();
  $('.img3').hide();
}




event.preventDefault();
});
});
