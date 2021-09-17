
/**
 * @file The main file of this p5js sketch.
 *
 *
 *
 * @author Miro Hofmann <miro-hofmann@posteo.org>
 * @version 0.1
 */

 var mgr;

/** This is a setup function. */
function setup() {
  createCanvas(screen_width, screen_height);
  frameRate(60);




  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene( name );

}

/** This is a draw function. */
function draw() {
  mgr.draw();
}

function keyPressed(){
  mgr.handleEvent("keyPressed");
}