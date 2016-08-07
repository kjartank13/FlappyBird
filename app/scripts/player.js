window.Player = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	//var SPEED = 30; // * 10 pixels per second
	var WIDTH = 5;
	var HEIGHT = 6;
	var INITIAL_POSITION_X = 30;
	var INITIAL_POSITION_Y = 25;
    var acceleration = 100;
    var inTunnel = false;
    
    var flap = new Audio('../../sounds/flapping.mp3');
    var die = new Audio('../../sounds/die.mp3');
    
    var keyDown = false;

	var Player = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
        this.ySpeed = 0;
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
        this.ySpeed = 0;
	};

    Player.prototype.onFrame = function(delta) {
        if(Controls.keys.space && !keyDown) {
            keyDown = true;
            this.ySpeed = 45;
            flap.play();
        }
        else if(Controls.keys.left && !keyDown) {
            keyDown = true;
            this.ySpeed = 45;
            flap.play();
        }
        else if(!Controls.keys.space && !Controls.keys.left && keyDown) {
            keyDown = false;
        }
        
        this.pos.y -= this.ySpeed * delta;
        this.ySpeed -= acceleration * delta;
        
        if(this.ySpeed < -10) {
            $('.PlayerImage').attr('class', 'PlayerImage Player-down');
        } else if(this.ySpeed > 10) {
            $('.PlayerImage').attr('class', 'PlayerImage Player-up');
        } else {
            $('.PlayerImage').attr('class', 'PlayerImage');
        }

		this.checkCollisionWithBounds();

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};
    
	Player.prototype.checkCollisionWithBounds = function() {
        var tunnel = this.game.tunnel;
		if (this.pos.x < 0 ||
			this.pos.x + WIDTH > this.game.WORLD_WIDTH ||
			this.pos.y < 0 ||
			this.pos.y + HEIGHT > this.game.WORLD_HEIGHT - 7) {
            
			return this.game.gameover();
		}
        var tunnelOpening = {
            upper: tunnel.pos.y + tunnel.upperBorder,
            lower: tunnel.pos.y + tunnel.lowerBorder,
            left: tunnel.pos.x,
            right: tunnel.pos.x + tunnel.width
        };

        if(((tunnelOpening.right > this.pos.x &&
            this.pos.x > tunnelOpening.left) ||
            (tunnelOpening.right > this.pos.x + WIDTH &&
            this.pos.x + WIDTH > tunnelOpening.left)) &&
            (this.pos.y < tunnelOpening.upper ||
            this.pos.y + HEIGHT > tunnelOpening.lower)) {
            die.play();
            return this.game.gameover();
        }
        
        if(((tunnelOpening.right > this.pos.x &&
            this.pos.x > tunnelOpening.left) ||
            (tunnelOpening.right > this.pos.x + WIDTH &&
            this.pos.x + WIDTH > tunnelOpening.left)) &&
            inTunnel === false) {
            inTunnel = true;
        }
        else if (this.pos.x > tunnelOpening.right && inTunnel === true) {
            inTunnel = false;
            this.game.score++;
        }
        
	};

	return Player;

})();
