import $ from 'jquery'

const $helloWorld = $('<h1>HELLO WORLD!!!</h1>');

$(function(){
  $('#app-container').append($helloWorld);
});
