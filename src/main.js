import { Game } from './game';
import './styles.css';


$(document).ready(function() {
  $('#new-game').click(function(event) {
    event.preventDefault();
    var newGame = new Game();
    newGame.forEach(function(picture) {
      $('.row').append("<div class='col-md'><div class='" + picture + "'>" + picture + "</div></div>");
    });
  });
});
