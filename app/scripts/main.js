
/**
 * Bootstrap and start the game.
 */
$(function() {
    'use strict';
    var muted = false;

    var game = new window.Game($('.GameCanvas'));
    game.start();
    
    var music = document.getElementById('music');
    var button = document.getElementById('muteButton');
    
    button.onclick = function() {
        music.muted = !music.muted;
    };
    
});
