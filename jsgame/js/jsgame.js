function GameRunner(boardId) {

    var canvas = document.getElementById(boardId);
    var context = canvas.getContext("2d");

    this.run = function(game) {
        console.log('run');
        if (typeof game['init'] == 'function') {
            game.init(this);
        }
    }

    this.stop = function() {
        console.log('stop');
    }

    this.clearBoard = function() {
        console.log('clearBoard');
    }
}
