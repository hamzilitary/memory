export function Game() {
  var pictures = ["c#", "c#", "php", "php", "css", "css"];
  return this.shuffle(pictures);
}

Game.prototype.shuffle = function(pictures) {
  for (var i = pictures.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = pictures[i];
    pictures[i] = pictures[j];
    pictures[j] = temp;
  }
  return pictures;
};
