import $ from 'jquery'

const $helloWorld = $('<div class="header">HELLO WORLD!!!<div>');

$(function(){
  $('#app-container').append($helloWorld);
  $('#app-container').append('<div class="glasses-img">s</div>');
});
