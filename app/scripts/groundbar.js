window.Groundbar = (function() {
	'use strict';

	var GROUNDSPEED = 3;

	var Groundbar = function(el, game) {
		this.el = el;
		this.game = game;
		this.player = game.player;
		this.pos = { x: 0, y: 0 };
	};

	Groundbar.prototype.onFrame = function(delta) {
		
		this.pos.x -= delta * GROUNDSPEED;
		
		if(this.pos.x <= -135){
			this.pos.x = 0;
		}
		
		this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	return Groundbar;

})();