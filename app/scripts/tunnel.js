
window.Tunnel = (function() {
    'use strict';
    
    var SPEED = 30;
    
    var Tunnel = function(el, game) {
		this.el = el;
        this.game = game;
        this.player = game.player;
        this.pos = {x: 110, y: setY()};
        this.width = 13;
        this.upperBorder = 40.52;
        this.lowerBorder = 58.58;
	};
    Tunnel.prototype.onFrame = function (delta) {
        this.pos.x -= delta * SPEED;
        
        if(this.pos.x < -14) {
            this.pos.x = 110;
            this.pos.y = setY();
        }
        
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };
    
    Tunnel.prototype.reset = function () {
        this.pos.x = 110;
    };
    
    function setY() {
        return -((Math.random() * 18) + 17);
    }
    
    return Tunnel;
})();