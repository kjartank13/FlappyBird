# HTML5 CSS-based Game

This game project has the following:

* 1024x768 pixel game canvas.
* All positions and sizes defined using a 10px em. This means that the game could be scaled up and down by changing the base font-size. This is one way to make the graphics responsive.
* A simple game loop which calculates delta and can be started and stopped.
* A player entity which can be moved around the canvas using the arrow keys.
* A "Game Over" screen when player is moved outside bounds, where the game can be restarted.

## Setup

```
npm install
bower install
grunt server
```


In this assignment, your task is to write a video game, using JavaScript and HTML5. It should use transformed DOM elements, and use object-oriented design for the JavaScript code.

The game should play mostly the same as Flappy Bird, although you may use different graphics (and this is actually encouraged). Try it to see how it should work. Some implementation details that you should emulate:

    (20%) The player character always stays in the same x position. Clicking space bar, clicking or tapping the screen makes the character jump up by a small amount, otherwise it falls down.
    (10%) Pipes and the ground slowly move to the left.
    (10%) If the player collides with the ground or a pipe, he loses instantly.
    (5%) Gets one point for every gap that the player successfully passes.
    (10%) If a player loses he should see his score and a button which starts the game again.

Additional requirements.

    (10%) All moving elements should be hardware accelerated.
    (10%) There should be a background element moving in paralax to the foreground, f.ex. a repeating cloud image. Note: it is not enough that the ground moves at different speed than the rest of the scene!
    (10%) The character rotates into his direction. The player should either have a sprite animation or some element (like a wing) which animates when flapping. 
    (15% )Background music and sound effects for flapping and colliding. Mute support.

Bonus points.

    (10%) The game is responsive, scales down and playable on mobile and tablets.
    Other gameplay innovations are rated by the complexity of implementation.
